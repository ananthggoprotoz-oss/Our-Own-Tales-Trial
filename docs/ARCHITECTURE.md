# Architecture and roadmap

This document explains how the codebase is organised today and how to extend it into the full store described in the information architecture (Discover → Shop → Personalise → Purchase → Support).

## Principles

1. **Content lives in `src/content`, not in components.** Copy, navigation, catalogue data and images are typed objects. Swapping them for a CMS or database later means changing the data source, not the UI.
2. **One route registry.** `src/lib/routes.ts` is the only place URLs are written. Planned pages are listed there and rendered by `src/app/[...slug]/page.tsx` as "coming soon" until each real page exists. To build a page, create its folder under `src/app` (e.g. `src/app/stories/page.tsx`) and remove it from `plannedPages`; Next.js prefers the explicit route.
3. **Money is an integer in paise.** `Money = { amount, currency: "INR" }` and `formatMoney()` in `src/lib/currency.ts`. Never store rupees as floats.
4. **Server first.** Pages and sections are React Server Components. Only components that need browser state are client components (`"use client"`): header menus, accordion, the name-preview pieces, reveal animations.
5. **Static by default.** `cacheComponents` and `partialPrefetching` are on. The homepage and all planned pages prerender to static HTML. When you add data fetching, use `"use cache"` for cacheable data and `<Suspense>` boundaries around request-time data (cart, delivery estimates). Do not read `Date`/`Math.random()` during server render outside a cached or suspended scope.

## Current shape

```
Browser ──> Next.js (App Router) ──> static HTML + RSC payload
                │
                ├── src/content/*   typed content (sample data today)
                └── public/brand/*  optimised brand assets
```

## Roadmap to a transactional store

### 1. Catalogue and product pages (Launch priority 1)

- Move `stories`, `bookFormats`, `specifications` from `src/content/catalog.ts` to a database (Postgres via Prisma or Drizzle) or a headless CMS (Sanity / Payload). Keep the same TypeScript types in `src/types/content.ts` so components don't change.
- Build `src/app/stories/page.tsx` (listing with filters by age / type / family) and `src/app/stories/[slug]/page.tsx` (gallery, specs, price, "Personalise this story").
- Use `generateStaticParams` for story slugs; revalidate with `revalidateTag(tag, "max")` when content changes.

### 2. Personalisation flow (Launch priority 2)

Five steps as defined in the design system (8.1):

1. Child's name → 2. Character appearance → 3. Story theme → 4. Personal details (family members, dedication, format, style) → 5. Preview and purchase.

Implementation notes:

- Route: `src/app/create/[step]/page.tsx` with a server-validated draft stored in a cookie-backed session or a `drafts` table keyed by an id (so a parent can come back later).
- Validate every step with `zod`; keep data when navigating back (design system 8.2).
- Preview: render pages from story templates with the child's name; reuse `BookCover` / `OpenBook` as the first visual version, then replace with real artwork renders.
- **Child data privacy:** collect only what is needed, record parental consent, document retention and deletion. India's DPDP Rules require verifiable parental consent for children's data; confirm the exact obligations with a lawyer before launch.

### 3. Cart and checkout (Launch priority 3)

- Cart state: server-side (cookie id → `carts` table) so it survives devices; expose a cart drawer in the header (`routes.cart`).
- Checkout page collects address and delivery option, shows launch free-shipping, and creates an **order** in `pending_payment` state before calling the payment gateway.

### 4. Payments (Razorpay recommended for India)

```
Checkout (client)                Next.js route handlers (server)              Razorpay
   │ POST /api/checkout/order ──────> creates DB order, calls Orders API ──────> order_id
   │ <────────────────────────────────── returns order_id + public key
   │ opens Razorpay Checkout.js ───────────────────────────────────────────────> payment
   │                                   POST /api/webhooks/razorpay <──────────── payment.captured
   │                                   verify HMAC signature (RAZORPAY_WEBHOOK_SECRET)
   │                                   mark order paid, trigger production + email
```

- Keep `RAZORPAY_KEY_SECRET` and `RAZORPAY_WEBHOOK_SECRET` server-only (never `NEXT_PUBLIC_`).
- Verify the payment signature on the server after checkout **and** handle the webhook idempotently (store `payment_id`; ignore duplicates).
- Prepaid or part-advance only; COD returns are a known margin risk for personalised products.
- Stripe can be added later behind the same `PaymentProvider` interface if international orders are needed.

### 5. Order confirmation, email and production

- `src/app/order/[id]/page.tsx` shows order number, payment status and next steps (order lookup by id + email, no customer accounts).
- Transactional email (Resend / Postmark) on payment and dispatch.
- Production hand-off: generate print-ready PDFs from the personalised template and send to the printing partner; store the job reference on the order.

### 6. Operations

- Analytics: add Vercel Analytics or GA4 via `next/script` with consent.
- Error monitoring: Sentry.
- Tests: Playwright for the personalisation and checkout journeys; Vitest for pricing and validation logic.

## Conventions

- Components: PascalCase files export named components. Sections are `src/components/sections/<name>.tsx`.
- Use `cn()` from `src/lib/utils.ts` to merge classes; it knows the custom type-scale utilities.
- Run `npm run check` before every commit. It runs ESLint, the design-system guard (`scripts/check-design.mjs`) and the type-check.
- Spacing: even Tailwind steps only (8-point grid); step 1 (4px) is the single half-step. Weights: `font-semibold` is the maximum.
- Icons: add new icons through the Icons8 MCP in the same two styles (Stickers, Puffy), save them to `public/icons/{stickers,ui}` at 256px / 96px, and register the Icons8 ID in `src/content/icons.ts`.
- Images: `next/image` everywhere; add new remote hosts to `next.config.ts` → `images.remotePatterns`.
- Accessibility: landmarks, heading order (one `h1` per page), labels on every input, focus-visible styles, `prefers-reduced-motion` respected.
