import test from 'node:test';
import assert from 'node:assert/strict';

const origin = process.env.TEST_BASE_URL || 'http://localhost:3000';
const routes = ['/', '/our-story', '/impact', '/jewelry', '/get-involved'];
const pages = new Map();
for (const route of routes) {
  test(`Server renders ${route} without client JavaScript`, async () => {
    const response = await fetch(new URL(route, origin));
    assert.equal(response.status, 200);
    const html = await response.text();
    pages.set(route, html);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    assert.match(html, /<main[^>]*id="main"/);
    assert.doesNotMatch(html, /href="(?:#|javascript:[^"]*)"/);
  });
}
test('Every rendered internal link and fragment has a real destination', async () => {
  for (const route of routes) {
    const html = pages.get(route) || await (await fetch(new URL(route, origin))).text();
    for (const [, href] of html.matchAll(/<a\b[^>]*href="([^" ]+)"/g)) {
      const url = new URL(href.replaceAll('&amp;', '&'), new URL(route, origin));
      if (url.origin !== new URL(origin).origin) continue;
      assert.ok(routes.includes(url.pathname), `Unknown destination: ${href}`);
      const target = pages.get(url.pathname) || await (await fetch(url)).text();
      if (url.hash) assert.ok(target.includes(`id="${url.hash.slice(1)}"`), `Missing fragment: ${href}`);
    }
  }
});
test('Participation remains honest and FAQs use native disclosures', async () => {
  const html = pages.get('/get-involved') || await (await fetch(new URL('/get-involved', origin))).text();
  assert.match(html, /Online donations are not available yet/);
  assert.equal((html.match(/<summary>[^<]/g) || []).length, 5);
  assert.doesNotMatch(html, /<form[ >]/);
});

test('Archive has four independently addressable native project disclosures', async () => {
  const html = await (await fetch(new URL('/impact', origin))).text();
  for (const id of ['desks', 'energy', 'education', 'water']) {
    assert.ok(html.includes(`<details id="${id}"`));
  }
  assert.match(html, /https:\/\/www.lbhsmun.org\/past-successes.html/);
  assert.match(html, /Current status to confirm/);
});
