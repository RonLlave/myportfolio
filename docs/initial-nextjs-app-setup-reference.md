# Initial App Setup — Reference for New Projects

A reference snapshot of the stack, packages, PWA setup, mobile install flow, and
mobile layout conventions currently used in **veedelshelfer-helferportal**. Use it
as a starting checklist when spinning up a new mobile-first Next.js app.

> Versions below reflect the current `package.json` at the time of writing. When
> starting fresh, install the latest compatible releases rather than pinning to
> these exact versions unless you need parity.

---

## 1. Core Stack

| Area | Choice |
| --- | --- |
| Framework | **Next.js 16** (App Router, Turbopack dev / Webpack build) |
| UI runtime | **React 19** (`react` / `react-dom` `19.1.0`) |
| Language | **TypeScript 5.8** (strict mode, `@/*` → `src/*` alias) |
| Styling | **Tailwind CSS 4** (`@tailwindcss/postcss`), `tw-animate-css`, `tailwindcss-animate` |
| Components | **shadcn/ui** pattern on **Radix UI** primitives |
| Auth + DB | **Supabase** (`@supabase/ssr` + `@supabase/supabase-js`) |
| i18n | **next-intl** (German default, English secondary; locale-prefixed routes) |
| PWA | **@serwist/next** (successor to next-pwa) |
| Node | `>=20.9.0` |

`package.json` scripts:

```jsonc
"dev":       "next dev --turbopack",
"dev:https": "node server.js",       // local HTTPS for testing PWA/service-worker
"build":     "next build --webpack",
"start":     "next start",
"lint":      "eslint",
"test":      "npx tsx --test 'src/**/*.test.ts'"
```

---

## 2. Packages

### 2.1 Required — framework & foundation

These form the backbone; nearly every new app needs them.

- `next`, `react`, `react-dom` — framework + runtime
- `typescript`, `@types/node`, `@types/react`, `@types/react-dom` — typing
- `tailwindcss`, `@tailwindcss/postcss`, `lightningcss` — styling pipeline
- `class-variance-authority`, `clsx`, `tailwind-merge` — the `cn()` helper + variant styling (shadcn baseline)
- `@supabase/ssr`, `@supabase/supabase-js` — auth + Postgres client (server + browser)
- `next-intl` — internationalization (locale routing + message loading)
- `eslint`, `eslint-config-next`, `@eslint/eslintrc` — linting

### 2.2 Required — UI primitives (Radix / shadcn)

Install the ones a given app actually uses; the current app pulls in a broad set:

`@radix-ui/react-*`: `accordion`, `alert-dialog`, `avatar`, `checkbox`,
`collapsible`, `dialog`, `dropdown-menu`, `label`, `popover`, `progress`,
`radio-group`, `scroll-area`, `select`, `separator`, `slider`, `slot`, `switch`,
`tabs`, `toggle`, `toggle-group`, `tooltip`, `visually-hidden`

Supporting UI:
- `lucide-react`, `@tabler/icons-react`, `react-icons` — icon sets
- `framer-motion` — animations (sheets, transitions, `whileTap`)
- `sonner` — toast notifications
- `vaul` — drawer / bottom-sheet primitive
- `next-themes` — theme (dark-mode) support

### 2.3 Conditionally required (required *if* the feature exists)

Each row is **required** when your app has the feature in the left column, and can
be skipped entirely otherwise. Install the package(s) only when you build that
feature.

| If the app has… | Then it requires… |
| --- | --- |
| Forms with validation | `react-hook-form`, `@hookform/resolvers`, `zod` |
| Date pickers / date logic | `date-fns`, `react-day-picker` |
| PWA install + web push notifications | `@serwist/next`, `serwist`, `web-push` (+ `@types/web-push`) |
| Interactive maps / routing | `leaflet`, `react-leaflet`, `leaflet-routing-machine`, `leaflet.markercluster` (+ `@types/leaflet*`) |
| Data tables (sort/filter/paginate) | `@tanstack/react-table` |
| Charts / analytics dashboards | `recharts` |
| PDF generation | `@react-pdf/renderer`, `pdf-lib` |
| Excel / CSV import or export | `xlsx-js-style`, `papaparse` (+ `@types/papaparse`), `csv-parse` |
| Signature capture | `react-signature-canvas` |
| Video streaming (Vimeo player) | `@vimeo/player` |
| Server-side email sending | `nodemailer` (+ `@types/nodemailer`) |
| SSR-safe cookie access | `cookies-next` |
| Generated unique IDs | `uuid` (+ `@types/uuid`) |

### 2.4 Optional — nice-to-have / polish

- `boring-avatars` — generated avatars
- `canvas-confetti` (+ `@types/canvas-confetti`) — celebratory effects (gamification)
- `critters` — critical-CSS inlining
- `react-mobile-picker` — wheel picker (note: the app's time picker was later rebuilt on native scroll-snap for OS momentum — see `src/components/time-picker-bottom-sheet.tsx`)
- `@google/genai` — AI features

### 2.5 Dev-only / build

- `@next/swc-linux-x64-gnu`, `@parcel/watcher-linux-x64-glibc` — platform build binaries (Linux CI/containers)
- `@types/leaflet*` — map typings

---

## 3. PWA Setup

### 3.1 Service worker via `@serwist/next`

`next-pwa` stopped emitting `public/sw.js` under Next.js 16, so this app uses
**@serwist/next**. Config in `next.config.ts`:

```ts
const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",          // worker compiled through the app's webpack pipeline
  swDest: "public/sw.js",
  cacheOnNavigation: false,
  disable: process.env.NODE_ENV !== "production",  // PWA off in dev
  exclude: [/* large on-demand PDFs kept out of precache */],
  globPublicPatterns: [/* exclude those PDFs from the public glob */],
});

export default withSerwist(withNextIntl(nextConfig));
```

The worker source lives at **`src/app/sw.ts`** (not a hand-rolled `worker/index.js`):

- Built on the `Serwist` class with `skipWaiting`, `clientsClaim`, `navigationPreload`.
- **Custom runtime caching (order matters — first match wins):**
  1. Same-origin `/api/*` GET → `NetworkOnly` (prevents flaky-network replays of stale auth/data → phantom 401 re-login loops).
  2. App Router document/RSC requests → `NetworkOnly` (authenticated dashboards must not replay day-old HTML/RSC).
  3. `...defaultCache` for everything else.
- On `activate`, auth-related runtime caches are purged, then `clients.claim()`.
- **Web Push handlers**: `push` (renders OS notification), `notificationclick`, `notificationclose`, plus an event beacon to `/api/push/event` (`keepalive: true`, `credentials: include`) for displayed/clicked/dismissed telemetry.

> **CSP gotcha:** the service worker re-`fetch()`es intercepted `<img>` tile
> loads, so remote image hosts (e.g. OpenStreetMap tiles) must be in **both**
> `img-src` **and** `connect-src`. Chrome's "Refused to connect" wording = a
> `connect-src` violation. See the `cspValue` block in `next.config.ts`.

### 3.2 Manifest

Served at **`/api/webmanifest`** (route handler) and also present as
`public/manifest.json`. Key fields:

```jsonc
{
  "name": "Helferportal",
  "short_name": "Helferportal",
  "theme_color": "#006e96",
  "background_color": "#ffffff",
  "display": "standalone",
  "orientation": "portrait",
  "scope": "/",
  "start_url": "/de/dashboard",   // locale-prefixed entry point
  "id": "/de/dashboard",
  "lang": "de",
  "shortcuts": [ /* Kunden, Einsätze — deep links with 192px icons */ ],
  "screenshots": [ /* 1080x1920 portrait */ ],
  "icons": [
    // 32 / 192 / 512 "any" + 192 / 512 "maskable"
  ]
}
```

Icon set to ship in `public/`: `favicon-16x16.png`, `favicon-32x32.png`,
`icon-192x192.png`, `icon-512x512.png`, `icon-maskable-192x192.png`,
`icon-maskable-512x512.png`, `apple-touch-icon.png` (180×180).

### 3.3 `<head>` / metadata (root `layout.tsx`)

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<link rel="manifest" href="/api/webmanifest" />
<meta name="theme-color" content="#006e96" />

<!-- Apple standalone -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="Veedelshelfer" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

<meta name="mobile-web-app-capable" content="yes" />
<meta name="format-detection" content="telephone=no" />
```

Fonts: `next/font/google` (Geist / Geist Mono) with `display: "swap"` + `preload`.

### 3.4 Registration & integration

The whole PWA + install stack is wired into `src/app/[locale]/layout.tsx`:

- `<ServiceWorkerInit />` — registers the worker on the client.
- `<AddToHomeScreen />` — the custom install prompt orchestrator (below).
- `<NotificationOpenPrompts />` — push-permission prompting.

---

## 4. Mobile "Add to Home Screen" Install Flow

Custom-branded install prompts (native browser prompts are generic and easy to
miss). Components live in `src/components/pwa/`.

### 4.1 Device / browser detection — `src/hooks/useUserAgent.ts`

Client hook returning `{ isMobile, isIOS, isAndroid, browser, isStandalone, canInstall }`.

- **Standalone detection** (already installed → suppress prompt):
  `matchMedia('(display-mode: standalone)')` **or** `navigator.standalone === true` (iOS) **or** `document.referrer.includes('android-app://')`.
- **Browser** parsed from UA — iOS: `ios-safari` / `ios-chrome` (`crios`) / `ios-firefox` (`fxios`); Android: `samsung` → `edge` → `brave` → `opera` → `firefox` → `chrome` (Chrome checked **last** because Edge/Brave/Opera all contain "chrome").
- Re-checks on `visibilitychange` and `display-mode` change so the prompt disappears the moment the app is installed.

### 4.2 Orchestrator — `src/components/pwa/AddToHomeScreen.tsx`

- Both platform components are `dynamic(..., { ssr: false })` for code splitting.
- Returns `null` when `isStandalone || !isMobile || isDismissed`.
- Routes by `browser`: `ios-safari` → iOS sheet; everything else → Android sheet (Chrome-like install pattern covers Edge/Brave/Opera/Samsung).
- Listens for the `appinstalled` window event to auto-dismiss.
- Dismissal is **session-scoped** (state only) — reappears on next load. (The cookie-based "don't show again" was removed; `onDontShowAgain` is kept only for interface compatibility.)

### 4.3 iOS sheet — `AddToHomeScreenIOS.tsx`

Manual 3-step visual guide (iOS can only install via the Share menu):

1. Tap **Share** (animated `FiShare` icon bobbing).
2. Tap **Add to Home Screen** (`MdAddBox`).
3. Confirm.

Full-screen `motion.div` overlay (`bg-black/50 backdrop-blur-sm`), inner sheet
slides up (`y: '100%' → 0`, spring `damping 25 / stiffness 300`), constrained to
`max-w-2xl mx-auto`. Only action is "Maybe later".

### 4.4 Android sheet — `AddToHomeScreenAndroid.tsx`

- Captures the `beforeinstallprompt` event (`e.preventDefault()` + stash it).
- Primary CTA calls `deferredPrompt.prompt()` then awaits `userChoice`; on `accepted`, closes.
- If no native prompt is available, falls back to a manual 3-step guide (⋮ menu → Add to Home screen → confirm).
- Same overlay + spring-slide pattern and `max-w-2xl` container as iOS.

### 4.5 Copy / i18n

All prompt strings live under the `pwa.install` namespace in
`messages/{de,en}.json` (title, subtitle, per-platform step titles/descriptions,
action labels). Never hardcode — add translation keys.

---

## 5. Mobile Layout & Sizing Conventions

**This is a mobile-first app (≈99% mobile, many elderly users). Design mobile
first, adapt to desktop second.**

### 5.1 Container & spacing

- **`max-w-2xl mx-auto`** is the standard content container for optimal reading width on phones (used for pages, sheets, and the install prompts).
- Vertical stacking, collapsible sections to reduce scrolling, priority-based ordering (most urgent at top).

### 5.2 Touch targets & typography

- **Minimum 48px, optimal 56px** touch targets (elderly users; WCAG AAA).
  - Example: primary Android install button is `h-14` (56px).
  - Wheel-picker items are `48px` (`ITEM_H`).
- Text: `text-base` minimum for body; large greetings (`text-3xl md:text-4xl`); high contrast.

### 5.3 Responsive breakpoints & navigation pattern

| Range | Platform | Nav |
| --- | --- | --- |
| `< 768px` | Mobile (primary) | Fixed bottom tab bar |
| `768–1024px` | Tablet | — |
| `> 1024px` | Desktop (secondary) | Top nav |

- **Mobile bottom nav** — `src/components/mobile-bottom-nav.tsx`:
  - `fixed bottom-0 left-0 right-0 z-50 md:hidden` (hidden on `md+`), `bg-white/95 backdrop-blur-xl border-t`.
  - `grid grid-cols-4` with **`safe-area-inset-bottom`** for iOS home-indicator clearance.
  - 4 tabs (Dashboard / Einsätze / Customers-or-Notifications / Menu); active tab highlighted with brand pill (`bg-[#006e96]` icon chip + label), `motion.button` `whileTap={{ scale: 0.95 }}`, optional unread badge.
- **Conditional rendering** — `src/components/app-layout-wrapper.tsx` shows the bottom nav only on `/dashboard`, `/akademie`, `/admin`, `/extraleistungen` routes, and **hides** it on the antrag form pages (which carry their own fixed Back/Next footer that would clash).

### 5.4 Mobile interaction patterns

- **Bottom sheets / drawers** for modals (`vaul` + Radix `Sheet`), full-screen overlays on mobile vs popovers/dropdowns on desktop.
- Framer Motion spring slide-ups (`damping 25 / stiffness 300`) for sheets.
- Native scroll-snap for wheel pickers (`scroll-snap-type: y mandatory` + `-webkit-overflow-scrolling: touch`) to get OS momentum — see `time-picker-bottom-sheet.tsx`.
- `AnimatePresence` for expand/collapse card transitions.

### 5.5 Brand tokens

- Primary blue **`#006e96`** (theme color + active states). Darker gradient pair `#004d6b`.
- Manifest `theme_color` / `background_color`: `#006e96` / `#ffffff`.

---

## 6. Quick Start Checklist

1. Scaffold Next.js 16 App Router + TypeScript, set `@/*` alias.
2. Add Tailwind 4 (`@tailwindcss/postcss`) + `cn()` (`clsx` + `tailwind-merge` + CVA).
3. Wire Supabase SSR auth (`@supabase/ssr`) + middleware.
4. Add `next-intl` with locale-prefixed routing (German default here).
5. Install the Radix/shadcn primitives you need; add `framer-motion`, `sonner`, `vaul`, `lucide-react`.
6. Configure PWA: `@serwist/next` in `next.config.ts`, worker at `src/app/sw.ts`, manifest + icons, `<head>` meta, `<ServiceWorkerInit />`.
7. Add the install-prompt stack (`useUserAgent` + `AddToHomeScreen` + iOS/Android sheets) with `pwa.install` i18n keys.
8. Establish mobile shell: `max-w-2xl` containers, `md:hidden` fixed bottom nav with `safe-area-inset-bottom`, 48–56px touch targets, `text-base`+ typography.
9. Lock CSP in `next.config.ts` — remember remote image hosts need `img-src` **and** `connect-src` because the SW re-fetches them.
