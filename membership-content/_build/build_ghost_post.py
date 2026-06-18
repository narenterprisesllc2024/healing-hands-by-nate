#!/usr/bin/env python3
"""Build a tier-gated Ghost post from a HHBN membership-content piece.

Usage: build_ghost_post.py <slug> [--month N] [--type module|protocol|deep-cut|reset]

Reads:
  membership-content/_drafts/<slug>.md
  membership-content/_workbooks/<slug>-workbook.md  (optional)
  membership-content/_rendered/<slug>.pdf
  membership-content/_rendered/<slug>-workbook.pdf  (optional)

Uploads PDFs to Ghost, builds HTML body, creates tier-gated post.
"""

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path

import jwt
import markdown
import requests

GHOST = "https://ghost.mysoviai.com"
BASE = Path("/opt/aionui/projects/healing-hands-by-nate/membership-content")
KEY_PATH = Path("/opt/aionui/projects/ghost-cms/.ghost-api-keys")

# Tier IDs from Ghost (verified live)
TIER_CONTINUITY = "6a2c281ada72f1000177e8a3"
TIER_BETWEEN = "6a2c281bda72f1000177e8aa"
TIER_INNER = "6a2c281bda72f1000177e8b1"

# Type-to-tier mapping (which tiers see this content)
TIER_FOR_TYPE = {
    "module": [TIER_CONTINUITY, TIER_BETWEEN, TIER_INNER],
    "protocol": [TIER_BETWEEN, TIER_INNER],
    "deep-cut": [TIER_INNER],
    "reset": [],  # 30-Day Reset is gated separately via Mautic; post is public
}

TAG_FOR_TYPE = {
    "module": "continuity-tier",
    "protocol": "between-sessions-tier",
    "deep-cut": "inner-circle-tier",
    "reset": "30-day-reset",
}


def get_jwt():
    key_line = [l for l in KEY_PATH.read_text().splitlines() if l.startswith("GHOST_ADMIN_API_KEY=")][0]
    key = key_line.split("=", 1)[1].strip("'\"")
    kid, secret = key.split(":")
    now = int(time.time())
    return jwt.encode(
        {"iat": now, "exp": now + 300, "aud": "/admin/"},
        bytes.fromhex(secret),
        algorithm="HS256",
        headers={"kid": kid},
    )


def upload_pdf(token, path):
    with open(path, "rb") as f:
        r = requests.post(
            f"{GHOST}/ghost/api/admin/files/upload/",
            headers={"Authorization": f"Ghost {token}"},
            files={"file": (Path(path).name, f, "application/pdf")},
            data={"ref": Path(path).stem},
            timeout=60,
        )
    r.raise_for_status()
    return r.json()["files"][0]["url"]


def strip_frontmatter(md_text):
    return re.sub(r"^---\n.*?\n---\n+", "", md_text, count=1, flags=re.DOTALL)


def parse_frontmatter(md_text):
    m = re.match(r"^---\n(.*?)\n---", md_text, flags=re.DOTALL)
    if not m:
        return {}
    out = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            k, v = line.split(":", 1)
            out[k.strip()] = v.strip().strip('"').strip("'")
    return out


def build_html_body(module_md, workbook_md, module_pdf_url, workbook_pdf_url, title):
    # Strip frontmatter from both
    module_clean = strip_frontmatter(module_md)
    # Drop the first H1 if present (Ghost shows post title separately)
    module_clean = re.sub(r"^# .+\n+", "", module_clean, count=1)

    module_html = markdown.markdown(module_clean, extensions=["extra", "sane_lists"])

    # Build downloads section first (members see it at top — easy access)
    download_html = f'''
<div style="border-left:4px solid #8b6f47;padding:16px 20px;background:#faf7f1;margin-bottom:32px;border-radius:4px;">
<p style="margin:0 0 8px 0;font-size:15px;color:#574429;"><strong>Downloads</strong></p>
<p style="margin:4px 0;">→ <a href="{module_pdf_url}" download>{title} — Module PDF</a></p>'''

    if workbook_pdf_url:
        download_html += f'\n<p style="margin:4px 0;">→ <a href="{workbook_pdf_url}" download>{title} — Companion Workbook PDF</a></p>'

    download_html += "\n</div>\n"

    body_parts = [download_html, module_html]

    if workbook_md:
        workbook_clean = strip_frontmatter(workbook_md)
        workbook_clean = re.sub(r"^# .+\n+", "", workbook_clean, count=1)
        workbook_html = markdown.markdown(workbook_clean, extensions=["extra", "sane_lists"])
        body_parts.append('<hr style="margin:48px 0;border:none;border-top:1px solid #e0d4ba;">')
        body_parts.append('<h2 style="color:#8b6f47;">Companion Workbook</h2>')
        body_parts.append(workbook_html)

    return "\n".join(body_parts)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("slug")
    ap.add_argument("--type", choices=["module", "protocol", "deep-cut", "reset"], required=True)
    ap.add_argument("--title", help="Post title; defaults to title from frontmatter")
    ap.add_argument("--month", type=int, help="Month number (for ordering)")
    ap.add_argument("--draft", action="store_true", help="Create as draft instead of published")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    module_md_path = BASE / "_drafts" / f"{args.slug}.md"
    workbook_md_path = BASE / "_workbooks" / f"{args.slug}-workbook.md"
    module_pdf_path = BASE / "_rendered" / f"{args.slug}.pdf"
    workbook_pdf_path = BASE / "_rendered" / f"{args.slug}-workbook.pdf"

    if not module_md_path.exists():
        sys.exit(f"missing: {module_md_path}")
    if not module_pdf_path.exists():
        sys.exit(f"missing: {module_pdf_path}")

    module_md = module_md_path.read_text()
    workbook_md = workbook_md_path.read_text() if workbook_md_path.exists() else None

    fm = parse_frontmatter(module_md)
    base_title = args.title or fm.get("title", args.slug)
    if args.month and args.type == "module":
        title = f"Month {args.month}: {base_title}"
    else:
        title = base_title

    print(f"Building post: {title}")
    print(f"  type:     {args.type}")
    print(f"  module:   {module_md_path.name} ({len(module_md.split())} words)")
    print(f"  workbook: {'(' + workbook_md_path.name + ')' if workbook_md else 'none'}")
    print(f"  pdfs:     {module_pdf_path.name}, {workbook_pdf_path.name if workbook_md and workbook_pdf_path.exists() else '(no workbook pdf)'}")
    print(f"  tiers:    {len(TIER_FOR_TYPE[args.type])} tier(s)")
    print()

    if args.dry_run:
        print("DRY RUN — no upload, no Ghost write")
        return

    token = get_jwt()

    print("Uploading module PDF…")
    module_pdf_url = upload_pdf(token, module_pdf_path)
    print(f"  {module_pdf_url}")

    workbook_pdf_url = None
    if workbook_md and workbook_pdf_path.exists():
        print("Uploading workbook PDF…")
        workbook_pdf_url = upload_pdf(token, workbook_pdf_path)
        print(f"  {workbook_pdf_url}")

    html_body = build_html_body(module_md, workbook_md, module_pdf_url, workbook_pdf_url, base_title)

    tier_ids = TIER_FOR_TYPE[args.type]
    visibility = "tiers" if tier_ids else "public"

    tag_slug = TAG_FOR_TYPE[args.type]
    post_payload = {
        "posts": [
            {
                "title": title,
                "slug": args.slug,
                "html": html_body,
                "tags": [
                    {"name": "healing-hands", "slug": "healing-hands"},
                    {"name": "membership", "slug": "membership"},
                    {"name": tag_slug, "slug": tag_slug},
                ],
                "visibility": visibility,
                "tiers": [{"id": t} for t in tier_ids] if tier_ids else None,
                "status": "draft" if args.draft else "published",
                "excerpt": fm.get("subtitle", "")[:240] if fm.get("subtitle") else None,
            }
        ]
    }
    # remove None values
    post_payload["posts"][0] = {k: v for k, v in post_payload["posts"][0].items() if v is not None}

    print("Creating Ghost post (?source=html)…")
    token = get_jwt()  # fresh token
    r = requests.post(
        f"{GHOST}/ghost/api/admin/posts/?source=html",
        headers={"Authorization": f"Ghost {token}", "Content-Type": "application/json"},
        json=post_payload,
        timeout=30,
    )
    if r.status_code >= 400:
        print(f"  ERROR {r.status_code}: {r.text[:500]}")
        sys.exit(1)
    post = r.json()["posts"][0]
    print()
    print(f"✓ Post created: {post['title']}")
    print(f"  status:     {post['status']}")
    print(f"  visibility: {post['visibility']}")
    print(f"  url:        {post.get('url', '?')}")
    print(f"  id:         {post['id']}")


if __name__ == "__main__":
    main()
