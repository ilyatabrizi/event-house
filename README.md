# Event House — landing page

Single-viewport public landing page for Event House (an iOS-first social
platform for discovering, hosting, and attending events). Hero-only by
design: headline, two CTAs, an ambient Ember-Nightfall aurora, and a 3D
iPhone mockup whose screen interior is a swappable slot.

Stack: Next.js 16 (App Router, TypeScript) · Tailwind CSS v4 · shadcn/ui ·
Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. No further setup is needed — the Android
waitlist stores entries in an internal file-backed store at
`.data/waitlist.json`.

## Waitlist backend

`POST /api/waitlist` (`src/app/api/waitlist/route.ts`) accepts
`{ "email": "…" }` and persists through `src/lib/waitlist-store.ts`:

- **Default (internal storage):** `.data/waitlist.json`, zero setup.
- **Supabase (free plan):** create a project, run `supabase/schema.sql` in
  the SQL editor, then copy `.env.example` to `.env.local` and fill in
  `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`. The store switches over
  automatically.

## Swapping the phone's screen content

The mockup is built in two layers (see the comment block at the top of
`src/app/globals.css`):

- **Layer 1 — chrome** (`src/components/phone/phone-mockup.tsx`): device
  frame, hardware, dynamic island, status bar, shadow, 3D transform.
  Never changes.
- **Layer 2 — content** (`src/components/phone/phone-slot.tsx`,
  `#eh-phone-slot`): the placeholder interior. To install the real app UI,
  empty this component's JSX and insert the new markup, keeping all styles
  scoped under `#eh-phone-slot`.
