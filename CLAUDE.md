# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Astro dev server (default http://localhost:4321)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built site locally
- `npx astro check` — type-check `.astro` files (uses `astro/tsconfigs/strict`)

There is no test runner, linter, or formatter configured.

## Stack

- **Astro 5** (static, no integrations beyond Vite plugins)
- **Tailwind CSS v4** wired through `@tailwindcss/vite` (see `astro.config.mjs`). This is the Vite-plugin path, not the legacy PostCSS plugin — there is no `tailwind.config.js`. All theme configuration lives inside `@theme { ... }` in `src/styles/global.css`.

## Architecture

This is a single-page marketing site for "Aritia Design" (luxury wedding & event design studio, French language). The site is pixel-perfect reproduction of an existing Wix design, so visual fidelity matters more than architectural elegance.

### Routing — important

`src/components/Header.astro` and `src/components/Footer.astro` link to routes (`/a-propos`, `/services`, `/portfolio`, `/boutique`, `/contact`, `/processus`) that **do not yet exist** as pages. Only `src/pages/index.astro` is implemented. Adding new pages means creating those Astro files; do not assume they already work.

### Layout & header behavior

`src/layouts/Layout.astro` is the only layout. It accepts a `transparentHeader` prop (default `true`). The header (`Header.astro`) starts transparent over the hero and swaps to a solid white bar once `window.scrollY > 60` — this is done with an inline `<script>` that toggles classes directly. When adding a page **without** a full-bleed hero, pass `transparentHeader={false}` so the header is readable from the top.

### Design tokens

All design tokens are defined as CSS custom properties inside `@theme` in `src/styles/global.css`:

- Fonts: `--font-display` (Playfair Display), `--font-sans` (Raleway, body default), `--font-script` (Haute Couture, decorative), `--font-italic` (Playfair italic).
- Colors: `--color-ink`, `--color-ink-soft`, `--color-paper`, `--color-cream`, `--color-burgundy`, `--color-burgundy-dark`, `--color-muted`.

Use these via Tailwind arbitrary values (`text-[var(--color-ink)]`, `bg-[var(--color-burgundy)]`) or the helper classes `.font-display`, `.font-script`, `.font-italic-serif`. Custom tracking utilities `.tracking-wider-2` (0.18em) and `.tracking-widest-2` (0.28em) match the Wix-like wide letter-spacing used throughout nav/buttons/labels.

### Fonts

Local font files live in `public/fonts/` (Playfair Display, Raleway, Haute Couture). They are declared with `@font-face` in `global.css` and **preloaded** from `Layout.astro`'s `<head>`. If you add a new weight/style, add both the `@font-face` rule and the preload link.

### Marquee

The home portfolio strip uses an infinite horizontal marquee implemented in pure CSS (`@keyframes marquee-x` in `global.css`). Items are duplicated in the markup and the track is translated by `-50%` to loop seamlessly. Hover pauses; `prefers-reduced-motion` disables the animation. Keep both halves in sync when editing the gallery in `index.astro`.

### Assets

`public/images/` contains hero, collage, footer-strip and portrait photos; `public/images/gallery/` holds the marquee thumbnails (`01.jpg`–`10.jpg`); `public/videos/hero.mp4` is the hero loop with `hero-poster.jpg` as poster. Many `<img>` tags include inline `onerror` fallbacks that swap in a CSS gradient — preserve these when editing so the layout survives missing assets.

### Content language

All user-facing copy is in **French** (`<html lang="fr">`). Preserve French typography conventions when editing copy (non-breaking spaces before `:`, `?`, `!`, `;` — written as `&nbsp;` in templates).
