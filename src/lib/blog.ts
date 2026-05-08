import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  readingMinutes: number;
  contentHtml: string;
  excerpt?: string;
};

export type PostMeta = Omit<Post, "contentHtml">;

async function getFiles() {
  try {
    const files = await fs.readdir(POSTS_DIR);
    return files.filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  } catch {
    return [];
  }
}

export async function getAllPostMeta(): Promise<PostMeta[]> {
  const files = await getFiles();
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.(md|mdx)$/, "");
      const raw = await fs.readFile(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const minutes = Math.max(1, Math.round(content.split(/\s+/).length / 220));
      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        date: String(data.date ?? new Date().toISOString().slice(0, 10)),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
        readingMinutes: minutes,
        excerpt: String(data.excerpt ?? "")
      } satisfies PostMeta;
    })
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const files = await getFiles();
  const file = files.find((f) => f.replace(/\.(md|mdx)$/, "") === slug);
  if (!file) return null;
  const raw = await fs.readFile(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);
  const minutes = Math.max(1, Math.round(content.split(/\s+/).length / 220));
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    readingMinutes: minutes,
    excerpt: String(data.excerpt ?? ""),
    contentHtml: processed.toString()
  };
}
