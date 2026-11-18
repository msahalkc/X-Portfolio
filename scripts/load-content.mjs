// Loads src/data/content.jsx from plain Node scripts. The file has JSX in it, so it is
// compiled with esbuild (installed with Vite) into a temporary module and imported from there.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { transform } from "esbuild";

const SRC = new URL("../src/data/content.jsx", import.meta.url);
const OUT_DIR = new URL("../node_modules/.cache/site-scripts/", import.meta.url);

export const loadContent = async () => {
  const { code } = await transform(await readFile(SRC, "utf8"), { loader: "jsx", jsx: "automatic", format: "esm" });
  await mkdir(OUT_DIR, { recursive: true });
  const out = new URL(`content-${Date.now()}.mjs`, OUT_DIR);
  await writeFile(out, code);
  return import(out.href);
};
