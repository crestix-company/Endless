import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist/client');
const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '/Endless';
const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://crestix-company.github.io/Endless/');
const origin = siteUrl.origin;
const routes = [
  ['/', '髪を整え、'],
  ['/menu/', 'メニュー・料金'],
  ['/salon/', 'dog-20260909.jpg'],
];
function fileFor(urlPath) {
  assert(urlPath.startsWith(`${prefix}/`), `Missing Pages prefix: ${urlPath}`);
  const file = path.join(root, decodeURIComponent(urlPath.slice(prefix.length)));
  assert(file.startsWith(`${root}/`), 'Asset escaped export directory');
  return urlPath.endsWith('/') ? path.join(file, 'index.html') : file;
}
function checkFile(file) {
  assert(existsSync(file) && statSync(file).size > 0, `Missing or empty output: ${file}`);
}
const visited = new Set();
function checkAsset(url) {
  const file = fileFor(new URL(url, origin).pathname);
  checkFile(file);
  if (visited.has(file)) return;
  visited.add(file);
  if (file.endsWith('.css')) {
    for (const match of readFileSync(file, 'utf8').matchAll(/url\(["']?([^\s"')]+)["']?\)/g)) {
      if (/^(data:|https?:)/.test(match[1])) continue;
      checkAsset(new URL(match[1], origin + url).pathname);
    }
  }
}
for (const [route, marker] of routes) {
  const url = origin + prefix + route;
  const html = readFileSync(fileFor(prefix + route), 'utf8');
  assert(html.includes(marker) && html.includes('カット倶楽部エンドレス'), `Wrong content at ${route}`);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `Expected one h1 at ${route}`);
  assert(html.includes(`href="${url}"`), `Missing canonical at ${route}`);
  assert(!html.includes('s-nishita.chatgpt.site'), `Preview URL leaked into ${route}`);
  assert(!html.includes('nishitasho.github.io'), `Previous repository URL leaked into ${route}`);
  if (!prefix) {
    assert(!html.includes('/Endless/'), `GitHub project prefix leaked into ${route}`);
    assert(!html.includes('crestix-company.github.io'), `Wrong canonical host at ${route}`);
  }
  for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(#|https?:|tel:|mailto:|data:)/.test(value)) continue;
    assert(value.startsWith(`${prefix}/`), `Unprefixed link in ${route}: ${value}`);
    checkAsset(value);
  }
  for (const [, value] of html.matchAll(/url\(["']?([^\s"')]+)["']?\)/g)) {
    if (value.startsWith('/')) checkAsset(value);
  }
  console.log(`Verified ${prefix + route}: HTML, metadata, navigation and assets`);
}
for (const name of ['interior-restored.webp', 'shaving-restored.webp', 'style-restored.webp', 'exterior.webp', 'dog-20260909.jpg']) {
  checkFile(path.join(root, 'images', name));
}
assert(existsSync(path.join(root, '.nojekyll')), 'Missing .nojekyll');
assert(!existsSync(path.join(root, 'wrangler.json')), 'Worker config must not be published');
for (const file of ['package.json', 'package-lock.json', 'app', 'components', 'scripts', 'server', '_worker.js']) {
  assert(!existsSync(path.join(root, file)), `Non-public source or Worker output included: ${file}`);
}
console.log(`Static artifact for ${siteUrl.href} passed (${visited.size} linked files, ${readdirSync(path.join(root, 'images')).length} photos).`);
