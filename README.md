# Mehmet Derya Hazar · Portfolio

A dev-aesthetic, bilingual (EN/TR) single-page portfolio for Mehmet Derya Hazar,
Full-Stack Developer at Undetectable AI / TruthScan. Dark by default with a terminal
flavor: cursor spotlight, typewriter hero, monospace accents, and a language toggle
that swaps every string from a fully typed content layer. Built to load fast, degrade
gracefully, and stay accessible.

**Live:** [portfolio-plum-alpha-75.vercel.app](https://portfolio-plum-alpha-75.vercel.app/)

## Stack

- **React 19** + **TypeScript** (strict) + **Vite 7**
- **Tailwind CSS v4**: CSS-first `@theme` with semantic design tokens (no config file)
- Self-hosted variable fonts: **Inter**, **Space Grotesk**, **JetBrains Mono** (`@fontsource-variable`)
- **Vercel Analytics** + **Speed Insights**
- No router, no UI or animation libraries. Everything is hand-rolled: SVG icons,
  IntersectionObserver reveals, scrollspy, typewriter, focus trap, and the cursor spotlight.

## Features

- **Typed bilingual content model**: copy lives in `Record<"en" | "tr", ...>` structures,
  so a missing translation is a compile-time error, not a runtime blank.
- **Persisted theme**: dark is the default; an inline pre-paint script in `index.html`
  applies the stored theme before first paint to guard against FOUC.
- **Persisted language**: choice is saved to `localStorage` and `<html lang>` stays in sync.
- **WCAG AA** contrast across every foreground/background pair in both themes.
- **`prefers-reduced-motion`** honored everywhere: reveals, typewriter, and spotlight all quiet down.
- **Lazy WebP screenshots** with intrinsic width/height for zero cumulative layout shift.

## Running locally

Requires **Node >= 20.19**.

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build
npm run preview   # serve the production build
npm run lint      # eslint
npm run typecheck # tsc -b
```

## Project structure

```
index.html                  Inline pre-paint theme script + root mount
src/
  main.tsx                  Entry: fonts, providers, App
  App.tsx                   Page composition
  index.css                 Tailwind v4 @theme tokens + global CSS
  content/                  Edit here: all copy, projects, and experience
    types.ts                  Shared content types (Locale, Localized, section models)
    ui.ts profile.ts          Typed EN/TR data files
    experience.ts projects.ts
    skills.ts sections.ts links.ts
  components/
    ui/                     Icons, buttons, tags, toggles
    layout/                 Skip link, section shell, spotlight, side + mobile nav
    sections/               Hero, About, Experience, Projects, Skills, Contact
  context/                  ThemeContext, LanguageContext
  hooks/                    localStorage, mediaQuery, reveal, scrollspy, typewriter, focusTrap
  lib/                      formatPeriod and other pure helpers
```

To update the site's content, edit the typed data files under `src/content/`; the UI
reads entirely from them.
