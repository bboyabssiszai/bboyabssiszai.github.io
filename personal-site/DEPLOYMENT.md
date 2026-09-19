# Deployment

GitHub Pages publishes automatically when `personal-site/` changes on `master`.
The existing `gh-pages` branch remains the publishing source. Historical Jekyll
source is retained at the repository root and in Git history.

## Vercel

Import `bboyabssiszai/bboyabssiszai.github.io` in Vercel, with the repository root
as Root Directory and `master` as Production Branch. The root `vercel.json`
provides installation, build and output settings. Use Node.js 22 or newer.

After deployment, attach the owner's selected domain in Project Settings → Domains
and apply the DNS records Vercel provides. No domain has been selected or purchased.

## Local preview

From `personal-site`, run `npm ci`, then `npm run dev`.
