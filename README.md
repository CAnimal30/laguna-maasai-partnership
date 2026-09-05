# Laguna Maasai Partnership

Private review website. Use Node 22.13 or later.

- `npm install` installs dependencies.
- `npm run dev` starts the preview.
- `npm run build` produces the Sites Worker build.
- `npm test` checks all five rendered routes, every internal link/fragment, and honest support availability. Start the dev server first; set `TEST_BASE_URL` for another test server.
- `npm run lint` checks the whole scaffold, including unused starter UI components.

Page content is in `components/page-content.tsx`, navigation in `components/site-shell.tsx`, and styling in `app/globals.css`. Links intentionally use native browser navigation so the site works without client routing. Reveal effects enhance already-visible server content. The background is one non-repeating fixed image behind transparent cream sections; colored sections are opaque.

Before public launch, use the parent planning documents to confirm contact, support, jewelry, claims, and image permissions. The review site is noindex. Keep Sites access private until launch approval.
