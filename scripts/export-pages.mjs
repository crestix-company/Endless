import assert from 'node:assert/strict';
import { existsSync, mkdirSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { startProdServer } from '../node_modules/vinext/dist/server/prod-server.js';

// Vinext beta.5 requests unprefixed URLs during App Router export, which skips
// routes when basePath is configured. Render our three public, data-free pages
// at their actual prefixed URLs, keeping the production HTML + hydration data.
// This version-pinned adapter can go when upstream exports basePath correctly.
const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? '/Endless';
const output = path.resolve('dist/client');
const routes = ['/', '/menu/', '/salon/'];
const server = await startProdServer({ host: '127.0.0.1', port: 0, outDir: path.resolve('dist'), noCompression: true });
try {
  for (const route of routes) {
    const response = await fetch(`http://127.0.0.1:${server.port}${prefix}${route}`, { redirect: 'error' });
    assert.equal(response.status, 200, `Failed to render ${route}`);
    const html = await response.text();
    assert(html.includes('カット倶楽部エンドレス') && html.includes('<h1'), `Incomplete HTML: ${route}`);
    const dir = path.join(output, route);
    mkdirSync(dir, { recursive: true });
    writeFileSync(path.join(dir, 'index.html'), html);
    console.log(`Exported ${prefix}${route}`);
  }
} finally {
  server.server.closeAllConnections();
  await new Promise((resolve, reject) => server.server.close(error => error ? reject(error) : resolve()));
}
// A subpath host mounts the artifact at its prefix; do not repeat it on disk.
const nestedAssets = path.join(output, prefix, '_next');
if (prefix && existsSync(nestedAssets)) {
  assert(!existsSync(path.join(output, '_next')), 'Unexpected duplicate asset directories');
  renameSync(nestedAssets, path.join(output, '_next'));
}
