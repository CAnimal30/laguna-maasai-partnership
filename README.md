# Laguna Maasai Partnership

Private review website. Use Node 22.13 or later.

- `npm install` installs dependencies.
- `npm run dev` starts the preview.
- `npm run build` produces the Sites Worker build.
- `npm test` checks all five rendered routes, every internal link/fragment, and honest support availability. Start the dev server first; set `TEST_BASE_URL` for another test server.
- `npm run lint` checks the whole scaffold, including unused starter UI components.

Page content is in `components/page-content.tsx`, navigation in `components/site-shell.tsx`, and styling in `app/globals.css`. Links intentionally use native browser navigation so the site works without client routing. Reveal effects enhance already-visible server content. The background is one non-repeating fixed image behind transparent cream sections; colored sections are opaque.

Before public launch, use the parent planning documents to confirm contact, support, jewelry, claims, and image permissions. The review site is noindex. Keep Sites access private until launch approval.

## Editorial refinement

The five pages share navigation and typography but use distinct layouts. The project archive uses native expandable records, with fragment links that open the matching record when JavaScript is available. Copying the story link reports clipboard success or offers a selectable link on failure. Source citations are shown beside historical records. Decorative assets are WebP versions of the supplied PNGs; originals remain for future editing. The four optimized files total about 526 KB.

Validation: `npm test` covers server-rendered pages, all internal destinations, FAQ structure, and project disclosures. Browser checks cover mobile overflow, menu navigation, record expansion, and copy-link feedback. Full-scaffold lint has existing errors in unused starter UI components; focused lint on the site components passes.
