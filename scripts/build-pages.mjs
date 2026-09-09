import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const env = {
  ...process.env,
  GITHUB_PAGES: 'true',
  NEXT_PUBLIC_BASE_PATH: '/Endless',
  NEXT_PUBLIC_SITE_URL: 'https://crestix-company.github.io/Endless/',
};
execFileSync(process.execPath, ['node_modules/vinext/dist/cli.js', 'build'], { env, stdio: 'inherit' });
execFileSync(process.execPath, ['scripts/export-pages.mjs'], { env, stdio: 'inherit' });
writeFileSync('dist/client/.nojekyll', '');
execFileSync(process.execPath, ['scripts/verify-pages-build.mjs'], { env, stdio: 'inherit' });
