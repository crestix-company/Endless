import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const target = process.argv[2] || 'github';
assert(['github', 'cloudflare'].includes(target), `Unknown static host: ${target}`);
const isGitHub = target === 'github';

const env = {
  ...process.env,
  STATIC_EXPORT: 'true',
  GITHUB_PAGES: String(isGitHub),
  NEXT_PUBLIC_BASE_PATH: isGitHub ? '/Endless' : '',
  NEXT_PUBLIC_SITE_URL: isGitHub ? 'https://crestix-company.github.io/Endless/' : 'https://endless-633.pages.dev/',
};
execFileSync(process.execPath, ['node_modules/vinext/dist/cli.js', 'build'], { env, stdio: 'inherit' });
execFileSync(process.execPath, ['scripts/export-pages.mjs'], { env, stdio: 'inherit' });
writeFileSync('dist/client/.nojekyll', '');
execFileSync(process.execPath, ['scripts/verify-pages-build.mjs'], { env, stdio: 'inherit' });
