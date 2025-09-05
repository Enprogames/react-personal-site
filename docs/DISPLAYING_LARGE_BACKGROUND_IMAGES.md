# Displaying Large Background Images

Make the hero background omnipresent across the site in a way that feels immersive (like cosmos.network), while staying performant, accessible, and readable.

## Goals

- Omnipresent: visible across routes without layout shifts.
- Subtle but present: does not overpower content; maintains contrast.
- Performant: optimized formats, sizes, and rendering.
- Accessible: respects reduced motion; decorative-only.
- Testable: stable selectors; minimal coupling to content tests.

## Options Overview

1) Global CSS background on `body` (simple, low-overhead)
2) Fixed-position background layer component (flexible per-route control)
3) MUI `CssBaseline` style override (theme-aware, central control)
4) Parallax/animated background (subtle depth, optional)
5) Canvas/WebGL or SVG effects (advanced, optional)

Pick the smallest option that meets the design. Start with 1 or 2; consider 4 only if motion is valuable and subtle.

---

## Option 1 — Global CSS Background (body::before)

Best for a single, site-wide background image.

Place your assets in `public/backgrounds/` (served from `/backgrounds/...`).

Example CSS (e.g., `src/index.css` or your global stylesheet):

```css
/* Decorative, omnipresent background */
html, body {
  background-color: #0a0a0f; /* fallback base */
}

/* Keep content above the background */
body { position: relative; }

/* Large fixed background layer */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  /* Prefer modern formats; fall back to webp/jpg */
  background-image: image-set(
    url('/backgrounds/hero.avif') type('image/avif') 1x,
    url('/backgrounds/hero.webp') type('image/webp') 1x,
    url('/backgrounds/hero.jpg') type('image/jpeg') 1x
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* Optional stylization to keep content readable */
  filter: saturate(0.9) brightness(0.9);
  opacity: 0.9;
}

/* Respect reduced motion (e.g., for parallax variants later) */
@media (prefers-reduced-motion: reduce) {
  body::before { transform: none !important; }
}

/* Printing: remove heavy background */
@media print {
  body::before { display: none; }
}
```

Pros:
- Minimal JS, works across routes automatically
- No React rendering cost; easy to tweak

Cons:
- Harder to vary background per route (requires body classes or CSS vars)

Per-route variant idea:

```ts
// In your router layout or App component
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useRouteBodyClass() {
  const { pathname } = useLocation();
  useEffect(() => {
    const cls = `route-${pathname.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`;
    document.body.classList.add(cls);
    return () => document.body.classList.remove(cls);
  }, [pathname]);
}
```

Then target `.route-resume body::before` rules or swap via CSS variables.

---

## Option 2 — Fixed Background Component

Use a dedicated React component layered behind the app. Good for route-specific backgrounds or dynamic sources.

Component (`src/components/BackgroundLayer.tsx`):

```tsx
import { memo } from 'react';

type Props = {
  src?: string; // if omitted, use CSS/image-set in style
  overlay?: string; // e.g., 'linear-gradient(...)'
};

const BackgroundLayer = memo(({ src, overlay }: Props) => {
  const style: React.CSSProperties = src
    ? { backgroundImage: overlay ? `${overlay}, url(${src})` : `url(${src})` }
    : {};
  return (
    <div
      aria-hidden="true"
      data-testid="background"
      style={style}
      className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
    />
  );
});

export default BackgroundLayer;
```

Usage in `App` layout (ensure this sits outside `Routes` so it persists across pages):

```tsx
import BackgroundLayer from './components/BackgroundLayer';

export default function AppLayout() {
  return (
    <div className="relative min-h-screen">
      <BackgroundLayer src={'/backgrounds/hero.avif'} />
      {/* header/nav */}
      {/* <Routes>...</Routes> */}
      {/* footer */}
    </div>
  );
}
```

Pros:
- Easy per-route switching and programmatic control
- Testable via `data-testid`

Cons:
- Slightly more overhead than pure CSS

Per-route switching example:

```tsx
import { useLocation } from 'react-router-dom';

const routeToBg: Record<string, string> = {
  '/': '/backgrounds/hero.avif',
  '/Projects': '/backgrounds/projects.avif',
  '/About': '/backgrounds/about.avif',
};

function AppLayout() {
  const { pathname } = useLocation();
  const bg = routeToBg[pathname] ?? '/backgrounds/hero.avif';
  return (
    <>
      <BackgroundLayer src={bg} />
      {/* ... */}
    </>
  );
}
```

---

## Option 3 — MUI `CssBaseline` Override

Centralize the background via theme so it’s available app-wide and can be theme-aware (light/dark).

Theme setup (e.g., `src/theme.ts`):

```ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          position: 'relative',
        },
        '@global': {
          'body::before': {
            content: '""',
            position: 'fixed',
            inset: 0,
            zIndex: -1,
            pointerEvents: 'none',
            backgroundImage: `image-set(
              url('/backgrounds/hero.avif') type('image/avif') 1x,
              url('/backgrounds/hero.webp') type('image/webp') 1x,
              url('/backgrounds/hero.jpg') type('image/jpeg') 1x
            )`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(0.9) brightness(0.9)',
            opacity: 0.9,
          },
        },
      },
    },
  },
});
```

Wrap your app with `<ThemeProvider>` and include `<CssBaseline />` once.

Pros:
- Single source of truth, theme-aware (can vary for dark mode)

Cons:
- Inline CSS in theme object can be harder to author than raw CSS

---

## Option 4 — Subtle Parallax (Optional)

Add slight depth by translating the background on scroll. Keep motion small and respect `prefers-reduced-motion`.

```ts
// src/hooks/useParallax.ts
import { useEffect } from 'react';

export function useParallax(selector = 'body::before', amount = 0.05) {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY * amount;
        document.documentElement.style.setProperty('--bg-translate', `${y}px`);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, [selector, amount]);
}
```

In CSS add:

```css
body::before {
  transform: translate3d(0, var(--bg-translate, 0), 0);
  will-change: transform; /* use carefully */
}
```

Keep `amount` small (0.03–0.08). Test on mobile.

---

## Option 5 — Canvas/WebGL or SVG (Advanced)

For galaxy-like fields, noise, or shader effects:

- SVG: gradients + blur/noise filters; good for subtle patterns.
- Canvas/WebGL: Three.js or regl for particle/starfields. Render once and keep static or low-FPS.
- Keep effects subtle; cap FPS; pause when tab is hidden.

Place a `<canvas>` in a fixed background component (Option 2) with `aria-hidden` and `pointer-events: none`.

---

## Asset Preparation

- Format: export AVIF (primary), WebP fallback, JPEG ultimate fallback.
- Sizes: prepare multiple widths (e.g., 1600, 2400, 3200). Use the largest sparingly.
- CSS `image-set()`: serve best supported format automatically.
- Color/contrast: pre-darken or add an overlay gradient to keep content readable.
- Compression: aim for ≤ 400–700 KB for the largest background; under ~250 KB if possible.
- Preload: add in `index.html` for faster first paint:

```html
<link
  rel="preload"
  as="image"
  href="/backgrounds/hero.avif"
  imagesrcset="/backgrounds/hero.avif 1x, /backgrounds/hero@2x.avif 2x"
  imagesizes="100vw"
/>
```

- Placeholder: optionally use a very light CSS gradient while the image decodes.

---

## Readability & UX

- Overlay: apply a subtle gradient or semi-transparent layer to improve contrast (e.g., `linear-gradient( rgba(8,8,15,.5), rgba(8,8,15,.5) )`).
- Backdrop: avoid `backdrop-filter` on large areas; costly on some GPUs.
- Z-index: keep background behind everything (`-z-10` in Tailwind or `z-index: -1`).
- Interactions: set `pointer-events: none` so it never blocks clicks.
- Reduced motion: feature-gate any transforms/animations with media queries.
- Print: disable the background for legible prints.

---

## Routing Considerations

- With `HashRouter`, place the background in the top-level layout so it persists across route changes.
- For per-route variants, map `pathname` to image sources (see Option 2) or toggle CSS classes (Option 1).
- Avoid re-mounting the background on every navigation (prevents flicker).

---

## Testing Guidance

Unit/Integration (Vitest + RTL):
- Mock or ignore the background in most tests; it is decorative.
- If using a component (Option 2), assert it renders once and sits behind content:

```tsx
expect(screen.getByTestId('background')).toBeInTheDocument();
```

E2E (Playwright):
- Verify background does not obstruct interactions (`pointer-events: none`).
- Optional visual check: ensure page retains expected contrast/readability.

---

## Performance Notes

- LCP: keep the hero content as the LCP target; backgrounds should not delay it.
- Decoding: modern browsers decode AVIF/WebP asynchronously; preloading helps.
- GPU: prefer `background-image` over large, animated DOM trees. Limit `will-change` usage.
- Mobile: use a lower-resolution asset for narrow viewports via `image-set()` or CSS variables.

---

## Quick Recommendations

- Want site-wide background now: use Option 1 (CSS `body::before`).
- Need per-route images: use Option 2 (Background component) or Option 1 + body classes.
- Want subtle depth: add Option 4 parallax at a small factor and honor reduced motion.
- Design system control: Option 3 with MUI `CssBaseline`.

---

## Common Pitfalls

- Background image blocking clicks: missing `pointer-events: none`.
- Text becomes unreadable: no overlay or insufficient contrast—add a gradient/overlay.
- Flicker on navigation: remounting the background on each route—move to top-level layout.
- Tests failing due to DOM APIs: ensure any scroll/parallax uses `requestAnimationFrame` and is disabled in tests, or polyfill in `src/setupTests.ts`.

---

## Rollout Plan

1) Add assets under `public/backgrounds/` (export AVIF/WebP/JPG).
2) Implement Option 1 or 2 in a short PR; verify locally with `npm run dev`.
3) Run `npm test` and `npm run build` to ensure no regressions.
4) Validate E2E basic navigation to ensure no interaction blocking.
5) Iterate on opacity/overlay to balance presence vs readability.

---

## Snippets Index

- Global CSS `body::before`: simple, site-wide background
- React `BackgroundLayer` component: flexible, route-aware
- MUI `CssBaseline` override: theme-controlled background
- Parallax hook: optional subtle motion
- Preload link: faster decode and paint

