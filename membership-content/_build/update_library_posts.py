#!/usr/bin/env python3
"""Update each tier-Library post to be a welcoming index page that lists
every member post in that tier with links + brief descriptions."""

import json
import re
import time
from pathlib import Path

import jwt
import requests

GHOST = "https://ghost.mysoviai.com"
KEY_PATH = Path("/opt/aionui/projects/ghost-cms/.ghost-api-keys")


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


def fetch_posts_by_tag(token, tag_slug):
    # Use URL-quoted filter syntax. + means AND in Ghost filter.
    import urllib.parse
    flt = urllib.parse.quote(f"tag:{tag_slug}+status:published")
    r = requests.get(
        f"{GHOST}/ghost/api/admin/posts/?filter={flt}&limit=50&order=slug%20ASC&fields=id,title,slug,url,excerpt,reading_time",
        headers={"Authorization": f"Ghost {token}"},
        timeout=30,
    )
    if r.status_code != 200:
        print(f"DEBUG filter response: {r.status_code} {r.text[:300]}")
    r.raise_for_status()
    return r.json()["posts"]


def list_html(posts, prefix_filter=None):
    items = []
    for p in posts:
        if prefix_filter and not p["slug"].startswith(prefix_filter):
            continue
        excerpt = p.get("excerpt") or ""
        rt = p.get("reading_time", 0)
        items.append(
            f'<li style="margin-bottom:14px;">'
            f'<a href="{p["url"]}" style="color:#574429;font-weight:600;">{p["title"]}</a>'
            + (f' <span style="color:#a89e91;font-size:13px;">· {rt} min</span>' if rt else "")
            + (f'<br><span style="color:#6f5938;font-size:14px;">{excerpt}</span>' if excerpt else "")
            + "</li>"
        )
    return "\n".join(items) if items else "<li>(content coming online — refresh in a moment)</li>"


LIBRARIES = {
    # slug → (title, intro, sections list of (h2, tag-filter, slug-prefix-filter))
    "continuity-library-your-monthly-modules-workbooks": {
        "title": "Continuity Library — Your Monthly Modules + Workbooks",
        "intro": (
            "Welcome to Continuity. You have full back-catalog access to every monthly module "
            "I've written, with companion workbooks for each. Start anywhere. Move at your own pace. "
            "Each module is 8–15 minutes of reading + a workbook that takes 20–30 minutes to walk through. "
            "You don't need to do them in order — pick the one that matches what your body's asking for this week."
        ),
        "tag_filter": "membership",
        "sections": [
            ("Monthly Modules", "m"),
        ],
    },
    "between-sessions-library-modules-workbooks-bonus-protocols": {
        "title": "Between Sessions Library — Modules + Workbooks + Bonus Protocols",
        "intro": (
            "Welcome to Between Sessions. You have everything Continuity members have, PLUS twelve "
            "bonus protocols — focused 4–6 minute reads for the specific moments in your week when "
            "you need something that works fast. Post-mowing, post-driving, before bed, after a long meeting. "
            "Use the modules to learn the system. Use the bonus protocols to apply it on the fly."
        ),
        "tag_filter": "membership",
        "sections": [
            ("Monthly Modules", "m"),
            ("Bonus Protocols", "b"),
        ],
    },
    "inner-circle-library-complete-access": {
        "title": "Inner Circle Library — Complete Access",
        "intro": (
            "Welcome to Inner Circle. You have every monthly module, every bonus protocol, AND twelve deep cuts — "
            "long-form explorations of specific systems and body parts. The deep cuts are 15–25 minutes each and go "
            "further than the monthly modules can in one piece. They're the work I'd take you through if we had a full "
            "off-table conversation about your body's long-term story."
        ),
        "tag_filter": "membership",
        "sections": [
            ("Monthly Modules", "m"),
            ("Bonus Protocols", "b"),
            ("Deep Cuts", "ic"),
        ],
    },
    "the-30-day-reset-your-program-materials": {
        "title": "The 30-Day Reset — Your Program Materials",
        "intro": (
            "Welcome to the 30-Day Reset. This is your front door — the master ebook + workbook for the "
            "thirty-day program is below. Work through it at your own pace. On day 31, you'll get an offer "
            "to roll into Continuity and keep the system going beyond the first month."
        ),
        "tag_filter": "30-day-reset",
        "sections": [
            ("Master Program", "r"),
        ],
    },
}


def build_index_body(intro, sections, all_posts):
    parts = [f'<p style="font-size:17px;line-height:1.6;color:#574429;">{intro}</p>']
    for section_title, prefix in sections:
        parts.append(f'<h2 style="color:#8b6f47;margin-top:36px;">{section_title}</h2>')
        parts.append(f'<ul style="padding-left:20px;">{list_html(all_posts, prefix)}</ul>')
    return "\n".join(parts)


def main():
    token = get_jwt()
    print("Fetching all published membership content…")
    membership_posts = fetch_posts_by_tag(token, "membership")
    reset_posts = fetch_posts_by_tag(token, "30-day-reset")
    print(f"  membership tagged: {len(membership_posts)}  30-day-reset tagged: {len(reset_posts)}")
    print()

    for slug, cfg in LIBRARIES.items():
        all_posts = reset_posts if cfg["tag_filter"] == "30-day-reset" else membership_posts
        # Don't include library posts themselves in the listings
        all_posts = [p for p in all_posts if p["slug"] != slug]
        body_html = build_index_body(cfg["intro"], cfg["sections"], all_posts)

        # Find the post
        token = get_jwt()
        r = requests.get(
            f"{GHOST}/ghost/api/admin/posts/slug/{slug}/?fields=id,updated_at,status,visibility",
            headers={"Authorization": f"Ghost {token}"},
            timeout=15,
        )
        if r.status_code != 200:
            print(f"  SKIP {slug}: status={r.status_code}")
            continue
        post = r.json()["posts"][0]

        payload = {
            "posts": [
                {
                    "html": body_html,
                    "updated_at": post["updated_at"],
                }
            ]
        }
        r = requests.put(
            f"{GHOST}/ghost/api/admin/posts/{post['id']}/?source=html",
            headers={"Authorization": f"Ghost {token}", "Content-Type": "application/json"},
            json=payload,
            timeout=30,
        )
        if r.status_code >= 400:
            print(f"  ERR {slug}: {r.status_code} {r.text[:200]}")
            continue
        updated = r.json()["posts"][0]
        print(f"  ✓ {cfg['title']}")
        print(f"     url={updated['url']}  reading_time={updated.get('reading_time', '?')} min")


if __name__ == "__main__":
    main()
