# Chenyu Zhou — personal site (Astrofy, customized)

The Astrofy template, customized into your main site and filled in from your CV. Builds cleanly
(`pnpm build`). Below: what's done, what's left, and how to deploy.

## Run it locally
```
pnpm install
pnpm dev          # http://localhost:4321
```

## Already filled in from your CV
- Home, Research, and CV pages with your real education, experience, publications, and awards
- Email (jidon0112@gmail.com) and Google Scholar link wired into the sidebar, footer, and home page
- Research page reflects your real papers (TGRS, IEEE Access, OTC, The Visual Computer) + ongoing CCS work
- Field notes (blog) with starter posts tagged Skiing / Badminton / Travel
- GitHub Pages deploy workflow (`.github/workflows/deploy.yml`)

## Still to add (search for these)
- `USERNAME` → your GitHub username, in `astro.config.mjs` (hosting) and the GitHub/LinkedIn social
  icons in `SideBarFooter.astro`. If you don't use GitHub/LinkedIn, just delete those two `<a>` blocks.
- `profile.webp` in `/public` → replace with your photo (keep the filename)
- `cv.pdf` → drop your CV PDF in `/public` so the "Download CV" button works
- `/post_img.webp` on the research cards → swap for your own figures (resistivity model, CO2 plume, etc.)
- The CCS card links to `#` (no paper yet) — add a DOI/link when you publish

## Deploy to GitHub Pages (free, as your user site)
1. Create a **public** repo named exactly `USERNAME.github.io`.
2. Set `site: 'https://USERNAME.github.io'` in `astro.config.mjs`.
3. Push this folder to the `main` branch.
4. Repo **Settings → Pages → Build and deployment → Source = GitHub Actions**.
5. The included workflow builds and deploys on every push. Live at `https://USERNAME.github.io`.

## Photography link
The sidebar "Photography" points to `/photography/` — where the rampatra gallery (a separate repo
named `photography`, served at `USERNAME.github.io/photography`) will live. That's the next step.
