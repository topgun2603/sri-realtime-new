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

Both ports are configurable, for running alongside other local projects:

```bash
PORT=3100 HMR_PORT=24778 npm run dev
```

`PORT` defaults to 3000 and `HMR_PORT` to 24678. Set `HMR_PORT` whenever you change `PORT` —
Vite opens its own websocket in middleware mode, and a second project on the default will take
it and leave hot reload silently broken.

### Environment

Both groups are optional — the app degrades honestly without them.

| Variable | Purpose | Without it |
| --- | --- | --- |
| `GEMINI_API_KEY` | Powers the AI solution architect | The endpoint returns a curated fallback recommendation |
| `SMTP_*`, `CONTACT_TO` | Emails contact-form enquiries | Delivery falls through to Firestore, then `mailto:` |
| `VITE_FIREBASE_*` | Firestore record + analytics | Only the `mailto:` fallback remains |

### Contact form delivery

`POST /api/contact` emails the enquiry to `CONTACT_TO` (default
`org@srirealtime.com`), with `Reply-To` set to the person who filled the form,
so replying goes straight back to them. The endpoint validates and length-caps
every field, strips CR/LF so nothing can inject mail headers, escapes the HTML
body, and rate-limits to 5 submissions per IP per 15 minutes.

Delivery degrades in order, and never reports a success that did not happen:

1. `POST /api/contact` — emails you (needs the Express server and `SMTP_*`)
2. Firestore `inquiries` — durable record
3. `mailto:` handoff in the visitor's own mail client

For **Gmail / Google Workspace**, set `SMTP_HOST=smtp.gmail.com`,
`SMTP_PORT=465` and an [App Password](https://myaccount.google.com/apppasswords)
as `SMTP_PASS`. A normal account password will be refused.

> **On static hosting there is no `/api`.** `firebase deploy --only hosting`
> publishes `dist/` alone, so step 1 (and the AI architect) only exist when the
> Express server is running — `npm start`, or any Node host. To get email from a
> purely static deploy, install the Firebase **Trigger Email** extension and
> point it at the `inquiries` collection; step 2 then sends the mail for you.

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
