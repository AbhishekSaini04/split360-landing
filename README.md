# split360-landing — Split360 marketing site

Next.js (App Router) static export, deployed on **Netlify**. Same colours, font and logo as the app.

| Path | What |
|---|---|
| `app/page.tsx` | Home: hero, features, trip pool, how it works, FAQ, CTA |
| `app/features/page.tsx` | Features in detail |
| `app/layout.tsx` | Site-wide SEO: title template, Open Graph, Twitter, robots, icons, JSON-LD (Organization, WebSite, SoftwareApplication) |
| `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` | `sitemap.xml`, `robots.txt`, web manifest |
| `lib/site.ts` | URLs and names (set by env vars below) |
| `lib/content.ts` | All page copy, FAQ (also used for FAQPage structured data) |
| `public/screens/` | App screenshots (webp) |

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Deploy on Netlify
New site from this repo; `netlify.toml` already sets build `npm run build`, publish `out`, security headers.
Set environment variables (Site settings → Environment variables), then redeploy:
```
NEXT_PUBLIC_SITE_URL=https://<landing domain>      # canonical URLs, sitemap, OG tags
NEXT_PUBLIC_APP_URL=https://<app domain>           # every "Open app" / "Start free" button
```
After it is live: add the domain in Google Search Console and submit `/sitemap.xml`.
