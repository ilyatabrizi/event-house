import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

/* Waitlist storage abstraction.
 *
 * With SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY set (free plan is fine —
 * see supabase/schema.sql), entries go to the `android_waitlist` table.
 * Without them, entries fall back to an internal file-backed JSON store at
 * .data/waitlist.json so the local preview works with zero setup. */

type WaitlistEntry = {
  email: string;
  created_at: string;
};

export type AddResult = { duplicate: boolean };

/* Where the file-backed fallback store lives. On a serverless host (Vercel,
 * AWS Lambda) the project directory is read-only — only the OS temp dir is
 * writable — so we write there. Locally we keep it in the project's .data/
 * dir so entries persist across restarts. Override with WAITLIST_DATA_DIR.
 * Note: on serverless this store is per-instance and ephemeral; set
 * SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY for durable storage. */
const isServerless = Boolean(
  process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME,
);
const DATA_DIR =
  process.env.WAITLIST_DATA_DIR ??
  (isServerless
    ? path.join(os.tmpdir(), "event-house")
    : path.join(process.cwd(), ".data"));
const DATA_FILE = path.join(DATA_DIR, "waitlist.json");

function supabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? { url, key } : null;
}

async function addViaSupabase(
  email: string,
  config: { url: string; key: string },
): Promise<AddResult> {
  const supabase = createClient(config.url, config.key, {
    auth: { persistSession: false },
  });
  const { error } = await supabase.from("android_waitlist").insert({ email });
  if (error) {
    // 23505 = Postgres unique violation: already on the list.
    if (error.code === "23505") return { duplicate: true };
    throw new Error(`Supabase insert failed: ${error.message}`);
  }
  return { duplicate: false };
}

async function addViaInternalStore(email: string): Promise<AddResult> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  let entries: WaitlistEntry[] = [];
  try {
    const parsed = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
    if (Array.isArray(parsed)) entries = parsed;
  } catch {
    // First write, or unreadable file — start fresh.
  }
  if (entries.some((entry) => entry.email === email)) {
    return { duplicate: true };
  }
  entries.push({ email, created_at: new Date().toISOString() });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf8");
  return { duplicate: false };
}

export async function addToWaitlist(email: string): Promise<AddResult> {
  const config = supabaseConfig();
  return config ? addViaSupabase(email, config) : addViaInternalStore(email);
}
