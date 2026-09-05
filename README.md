# SRI REAL TIME — Enterprise Web Platform

Marketing and capability site for **SRI REAL TIME** — a full-service technology company building
enterprise digital systems (ERP, CRM, SCM, inventory, MIS), applied AI and automation, and mobile
and web products.

Live: [srirealtime.com](https://srirealtime.com) · In-house products:
[Pasumaivelanmai](https://pasumaivelanmai.com) · [Pasumai Trade](https://pasumaitrade.com)

## Stack

- **Frontend** — React 19, TypeScript (strict), Vite 6, Tailwind CSS v4, React Router 7
- **Motion** — `motion` (Framer Motion v12), with every animation gated on reduced-motion preferences
- **Backend** — Node.js + Express (`server.ts`), serving the API and the built SPA
- **AI** — Google Gemini via `@google/genai`, behind `POST /api/ai-consultant`
- **Data** — Firebase Firestore for consultation inquiries; Firebase Analytics, loaded on idle

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

`npm run dev` runs the Express server with Vite in middleware mode, so the API and the frontend
share one origin and one port.

### Environment

Both groups are optional — the app degrades honestly without them.

| Variable | Purpose | Without it |
| --- | --- | --- |
| `GEMINI_API_KEY` | Powers the AI solution architect | The endpoint returns a curated fallback recommendation |
| `VITE_FIREBASE_*` | Firestore writes + analytics | The contact form falls back to a `mailto:` handoff |

Firebase config is read from `VITE_FIREBASE_API_KEY`, `_AUTH_DOMAIN`, `_PROJECT_ID`,
`_STORAGE_BUCKET`, `_MESSAGING_SENDER_ID`, `_APP_ID` and `_MEASUREMENT_ID`. Keep real values in
`.env.local`, which is gitignored.

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Express + Vite dev server on port 3000 |
| `npm run lint` | `tsc --noEmit` — strict type check across the app and server |
| `npm run build` | Vite production build plus an esbuild bundle of the server |
| `npm start` | Runs the built server from `dist/` |
| `npm run preview` | Serves the static build |
| `npm run deploy` | Build, then `firebase deploy` |

## Structure

```
src/
  pages/           One component per route, each owning its own SEO metadata
  components/
    layout/        Navbar, Footer, PageHero, accessibility panel
    sections/      Composable page sections (Hero, Services, Process, …)
    ui/            Primitives: Section, Reveal, Counter, Marquee, OrbitSystem
  context/         Accessibility settings, persisted to localStorage
  data/            All site copy and structured content
  hooks/           useMotionEnabled
  lib/             Firebase, inquiries, SEO, navigation, icon resolution
```

### Routes

`/` · `/services` · `/ai` · `/technology` · `/process` · `/work` · `/estimator` · `/contact`

Every route is a real URL with its own title, description, canonical and Open Graph tags. Only the
home page ships in the main bundle; the rest are code-split and fetched on demand, as is the
Firebase SDK.

## Design system

Tokens live in `src/index.css`. The palette is derived from the brand mark — deep navy for
structure, brand red reserved for accent and calls to action — and every colour is defined as a
semantic CSS variable (`--surface`, `--text-muted`, `--accent`) that swaps wholesale in dark mode.
Type is Space Grotesk for display, Inter for body and JetBrains Mono for labels.

## Accessibility

A settings panel in the header controls dark mode, high contrast, reduced motion, a
dyslexia-friendly typeface, stronger focus outlines, text scaling and a large-format presentation
mode. Preferences persist to `localStorage` and apply as classes on the root element. JavaScript
animation also honours the OS `prefers-reduced-motion` setting.

## Content policy

The capability showcases under `/work` are **representative solution blueprints** — engineering
approaches and the targets an architecture is designed to hit. They are deliberately not presented
as measured results from named client engagements. Keep it that way when adding to
`CAPABILITY_SHOWCASES`.

## Contact

**org@srirealtime.com** · Coimbatore, Tamil Nadu, India
