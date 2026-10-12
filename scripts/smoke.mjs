import fs from 'node:fs';
const origin = process.argv[2] || 'http://localhost:3000';
const manifest = JSON.parse(
  fs.readFileSync('.next/prerender-manifest.json', 'utf8'),
);
const routes = Object.keys(manifest.routes).filter(
  (route) => !route.startsWith('/_'),
);
let failures = 0;
for (const route of routes) {
  const response = await fetch(origin + route);
  const body = await response.text();
  const ok =
    response.ok &&
    (route.endsWith('.xml') || route.endsWith('.txt') || body.includes('TCE'));
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${response.status} ${route}`);
}
for (const route of [
  '/shops/missing-shop',
  '/journals/missing-post',
  '/events/missing-event',
  '/galleries/missing-album',
  '/guides/missing-guide',
  '/missing-page',
]) {
  const response = await fetch(origin + route);
  const ok = response.status === 404;
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${response.status} ${route}`);
}
console.log(`${routes.length + 6} route checks; ${failures} failures.`);
process.exitCode = failures ? 1 : 0;
