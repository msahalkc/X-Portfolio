// Runs before every build (npm "prebuild"): refreshes src/data/medium.json from the Medium feed.
// If Medium can't be reached, the committed file is kept so the build never fails because of it.
import { writeFile } from "node:fs/promises";
import { parseMediumFeed } from "../src/lib/parseMediumFeed.js";

const FEED = "https://medium.com/feed/@msahalkc";
const OUT = new URL("../src/data/medium.json", import.meta.url);

try {
  const res = await fetch(FEED, { headers: { "User-Agent": "msahalkc.com build" }, signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const posts = parseMediumFeed(await res.text());
  if (posts.length === 0) throw new Error("feed had no posts");
  await writeFile(OUT, `${JSON.stringify(posts, null, 2)}\n`);
  console.log(`medium: saved ${posts.length} posts`);
} catch (err) {
  console.warn(`medium: kept the existing posts (${err.message})`);
}
