# Crystal Kizor: single-page site

Vite + React 19 + TypeScript + Tailwind v3, structured like the MarketVerse
frontend (`src/screens`, `src/components/public`, `src/common`, `src/data`,
`src/config`, `src/hooks`, `src/context`, `src/utilities`, `src/types`).

## Run locally

```bash
npm install
cp .env.example .env     # then edit it
npm run dev              # http://localhost:3000
npm run build            # type-check + production build
npm run lint
```

## Before you deploy (important)

1. **`VITE_CONTACT_EMAIL`**: where enquiries go. Left unset it falls back to `hello@example.com`.
2. **Optional `VITE_FORM_ENDPOINT`**: a Formspree/Getform URL. Without it the form opens the visitor's email app, pre-filled.
3. **Optional `VITE_REACT_APP_GOOGLE_TRACKING`**: GA4 ID, to switch on the event tracking.
4. **Brand links** (`VITE_URL_*`) and **socials** (`VITE_SOCIAL_*`): leave empty to hide them.
5. Set the same variables in Vercel > Project Settings > Environment Variables, then redeploy.

Deploy: push to GitHub, import in Vercel (framework: Vite). `vercel.json` handles routing and caching.

## Add the supplied assets (no code changes)

Put files in `src/assets/images/` and `src/assets/logos/` using the names in the README inside each folder
(e.g. `crystal-portrait.jpg`, `studio-coka.jpg`, `studio-coka.svg`). Anything missing shows a labelled
placeholder or the brand name in type. Keep photos under about 250 KB each (WebP is ideal) to stay fast.

## Edit the copy

All brand names, descriptions, audiences, start paths and form options live in `src/data/ecosystem.ts`.
Copy beyond the brief (the "For:" audiences, the "Concept" band, the hero line) is a proposal for Crystal to review.
To remove the AI "Concept" band, delete `<NextSection />` in `src/components/public/home/Home.tsx`.

## Analytics events (GA4)

`start_path_click`, `map_select`, `map_click`, `cta_click`, `outbound_click`, `select_enquiry`,
`form_start`, `form_error`, `generate_lead`, `form_failure`. All go through `src/utilities/analytics/analytics.ts`.
