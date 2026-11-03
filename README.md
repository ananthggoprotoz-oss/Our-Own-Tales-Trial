# Our Own Tales — website

> **This folder is Version 3** (3 November 2026): a compilation of sections chosen from Version 1 (`../ourowntales-web-v1`) and Version 2 (`../ourowntales-web`), each taken unchanged.
> V2's code is in `src/components`, `src/content`, `src/lib`, `src/types`. V1's code is in `src/v1/…` (same structure) and renders inside `<V1Scope>`.
> The section order and the version each one comes from are listed at the top of `src/app/page.tsx`. Run it on port 3002: `npm run dev -- --port 3002`.


Production codebase for Our Own Tales, the personalised children's storybook store. This repository currently contains the homepage and the branded placeholders for every page in the information architecture. It is built to grow into the full store: product pages, the personalisation flow, cart, checkout and payments.

## Tech stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js 16** (App Router, React 19, TypeScript) | Server rendering and static prerendering for SEO and speed, API routes for payments and webhooks, first-class image and font optimisation. |
| Styling | **Tailwind CSS v4** with design tokens in `src/app/globals.css` | Every colour, font, radius and motion token from the design system lives in one place. |
| Motion | `motion` (Framer Motion) | Gentle reveals and menus, all disabled under `prefers-reduced-motion`. |
| Icons | Icons8 **Stickers** (illustrative) and **Puffy** (UI glyphs), stored in `public/icons` | Playful, child-friendly icon set chosen via the Icons8 MCP. IDs are in `src/content/icons.ts`. |
| Hosting (recommended) | Vercel, or any Node 20.9+ host | Zero-config for Next.js 16; add the domain in the dashboard. |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also runs type-checking)
npm run lint         # ESLint
npm run lint:design  # Design-system guard: no bold, 8-point spacing, no px font sizes
npm run check        # lint + design guard + type-check
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the live domain before deploying.

## Project structure

```
src/
  app/                 Routes (App Router)
    layout.tsx         Fonts, metadata, announcement bar, header, footer
    page.tsx           Homepage (15 sections from the structure document)
    [...slug]/         Planned pages render a "coming soon" template until built
    icon.png …         App icons generated from the logo
  components/
    layout/            Announcement bar, header + menus, footer, coming-soon
    sections/          One component per homepage section
    ui/                Buttons, panels, chips, accordion, book mock-ups, inputs
    illustrations/     StoryScene — the sample scene in both illustration styles
    providers/         Shared "child name" preview state
  content/             ALL copy and catalogue data (edit here, not in components)
    site.ts            Brand, contact, social links, promotions
    navigation.ts      Main and footer navigation
    homepage.ts        Section copy from the homepage structure document
    catalog.ts         Stories, formats, prices, specifications  ← SAMPLE DATA
    reviews.ts         Reviews                                    ← SAMPLE DATA
    faqs.ts            Homepage FAQ answers (review before launch)
    images.ts          Lifestyle photos (Unsplash placeholders) and brand assets
  lib/                 routes.ts (single source of URLs), currency, utils
  types/               Content types (Money in paise, Story, Review…)
public/brand/          Logo, hero-art.png (logo illustration without the wordmark) and hero-child.png
docs/ARCHITECTURE.md   How to add the shop, personalisation flow and payments
```

## Before launch — content that must be replaced

Everything below is clearly marked in the code with `SAMPLE` or `TODO` comments.

1. **Stories, prices and specifications** in `src/content/catalog.ts` — use the real titles, final prices and the printer's confirmed specs. Prices are stored in paise.
2. **Reviews** in `src/content/reviews.ts` — the four entries are illustrative and show a "Sample review" label. Replace them with genuine reviews collected with permission.
3. **Lifestyle photography** in `src/content/images.ts` — currently hot-linked from Unsplash (Indian families and children where possible). Replace with your own photography before or soon after launch; never place stock photos next to reviews.
4. **FAQ answers** in `src/content/faqs.ts` — written to avoid promising timelines; update once production and delivery windows are confirmed.
5. **Site config** in `src/content/site.ts` — legal name, support email, social links, and the launch offers (15% first-order discount, free shipping).
6. **Domain** — set `NEXT_PUBLIC_SITE_URL` so canonical URLs, Open Graph and the sitemap point to the live site.

## Design system

The site follows `brand/our_own_tales_website_design_system.md` (version 1.1):

- **Semibold (600) is the heaviest weight.** Bold is never used; fonts load only 400/500/600, and the Tailwind theme defines only `font-normal`, `font-medium` and `font-semibold`, so bold utilities cannot be generated.
- **8-point grid.** Use even Tailwind spacing steps (2, 4, 6, 8, 10, 12, 16, 20, 24, 30). Step 1 (4px) is the only half-step. Type line heights sit on a 4px baseline. `npm run lint:design` fails the build check on violations.
- **Panels align with the page.** `.container-site` is the page container; inside an inset panel use `<Container inset>` so content lines up with the rest of the page at every breakpoint.
- **Icons.** `<Sticker name="dragon" size={56} />` for illustrative icons (sizes 24–128 on the 8-pt grid) and `<Glyph name="search" className="size-6" />` for UI glyphs, which inherit the text colour.

- Colours, fonts (Fredoka / Nunito Sans), spacing, radii, shadows and motion durations are CSS variables in `src/app/globals.css` and are used as Tailwind utilities (`bg-brand-purple`, `text-ink`, `rounded-panel`, `shadow-card`, `text-h2` …).

### Homepage look and feel (Wrenly / Joily-inspired, on our tokens)

Reusable patterns introduced with the November 2026 homepage. Reuse them on new pages instead of inventing new ones.

| Pattern | Where it lives | Notes |
| --- | --- | --- |
| Two-tone headings | `*phrase*` in any title in `src/content` → `<AccentText>` / `<SectionHeading>` | Accent is orange on light surfaces, yellow on purple, white on brand lavender. |
| Section heading layouts | `<SectionHeading layout="stack" \| "split" \| "center">` | `split` = heading left, intro right (Wrenly). |
| Eyebrow pill with dot | `<Eyebrow tone="light" \| "dark" \| "white">` | 32px, sentence case. |
| Button with icon bubble | `<Button bubble="arrow">` or `bubble="magic-wand"` (any sticker) | Solid buttons get the pressable lip (`inset-shadow-lip`). |
| Inset panels | `<Panel tone="purple" \| "cream" \| "lavender" \| "lilac" grid>` | `grid` adds the faint storybook grid (`.bg-grid` / `.bg-grid-ink`). |
| Arch frames | `.arch`, `.arch-open`, `<ArchImage>` | The signature picture shape (hero row, explore cards, gifting, final CTA). |
| Tilted ribbon marquee | `trust-band.tsx` + `<Marquee duration reverse>` | Pauses on hover/focus; static under reduced motion. |
| Sticky stacking cards with live demos | `how-it-works.tsx`, `how-it-works-demo.tsx` | Pure CSS `position: sticky` with a 24px step. Each card holds a working mini-control (pick a book, type a name, compare styles, choose a format); a card with keyboard focus rises above the stack so its control is never hidden (WCAG 2.4.11). |
| Accessible tabs | `explore-tabs.tsx` | WAI-ARIA tabs; every panel stays in the HTML. |
| Style comparison slider | `how-it-works-demo.tsx` (step 03) | Native range input (touch, mouse, keyboard). Position the divider with `compareEdge()` so it stays under the pointer (`--compare-thumb`). The "Two magical styles" section shows the two styles as plain side-by-side images. |
| Taped notes | `what-parents-say.tsx`, `dedication-card.tsx` | Tape colours come from the brand palette; avatars are initials, never photos. |
| Overlapping final CTA | `final-cta.tsx` (`data-overlaps-footer`) + `.footer-panel` | The footer makes room automatically via `body:has(...)`. |

Tokens added for these patterns: `--shadow-note`, `--inset-shadow-lip`, `--animate-fade-up`, `--animate-blink`, `.text-numeral` (48/64px step numbers) and `--footer-overlap`. Soft card backgrounds use opacity tints of the brand colours (`bg-brand-yellow/24`, `bg-brand-orange/16`), never new hex values.
- The 12-column / 1280px grid is the `.container-site` class (64 / 32 / 24px margins).
- All interactive controls are keyboard accessible, have visible focus rings and 44px targets; every form field has a persistent label.

## Licences and credits

- **Icons8:** free use requires the visible "Icons by Icons8" link (already in the footer), or a paid Icons8 licence. Keep the link unless you buy one.
- **Unsplash:** photos are free to use under the Unsplash License; photographer credits are kept in `src/content/images.ts`.

## Deployment

1. Push this folder to a Git repository (`git init` has not been run yet).
2. Import it in Vercel (or your host), set `NEXT_PUBLIC_SITE_URL`, deploy.
3. Point the domain's DNS at the host. HTTPS is automatic on Vercel.

See `docs/ARCHITECTURE.md` for the roadmap to a transactional store.
