import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const pages = [
  "index.html",
  "research.html",
  "publications.html",
  "experience.html",
  "cv.html",
  "styles.css",
  "scripts.js",
  "assets",
  "images"
];

await rm("dist", { recursive: true, force: true });
await mkdir("dist/client", { recursive: true });
await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });

for (const source of pages) {
  await cp(source, `dist/client/${source}`, { recursive: true });
}

await cp(".openai/hosting.json", "dist/.openai/hosting.json");
await writeFile(
  "dist/server/index.js",
  `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
`
);
