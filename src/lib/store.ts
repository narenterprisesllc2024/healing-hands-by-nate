import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(path.join(DATA_DIR, file), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson<T>(file: string, data: T) {
  await ensureDir();
  await fs.writeFile(path.join(DATA_DIR, file), JSON.stringify(data, null, 2), "utf8");
}

export type Submission = {
  id: string;
  type: "contact" | "subscribe";
  email: string;
  name?: string;
  phone?: string;
  message?: string;
  source?: string;
  createdAt: string;
};

export async function appendSubmission(s: Omit<Submission, "id" | "createdAt">) {
  const file = s.type === "contact" ? "submissions.json" : "subscribers.json";
  const list = await readJson<Submission[]>(file, []);
  const entry: Submission = {
    ...s,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString()
  };
  list.push(entry);
  await writeJson(file, list);
  return entry;
}

export async function relayWebhook(url: string | undefined, payload: unknown) {
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.error("Webhook relay failed:", err);
  }
}
