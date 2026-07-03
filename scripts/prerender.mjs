import { readFileSync, writeFileSync } from "node:fs";
import { render } from "../dist-server/entry-server.js";

const templateUrl = new URL("../dist/index.html", import.meta.url);
const template = readFileSync(templateUrl, "utf-8");

const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(
    "prerender: could not find an empty '<div id=\"root\"></div>' in dist/index.html",
  );
}

const appHtml = render();
const out = template.replace(marker, `<div id="root">${appHtml}</div>`);
writeFileSync(templateUrl, out);

console.log(`prerender: injected ${appHtml.length} characters into dist/index.html`);
