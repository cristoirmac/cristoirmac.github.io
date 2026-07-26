# chrismcfadden.com

Source for Chris McFadden's personal executive website — a calm, editorial profile for CTO / SVP
Engineering work. Built as a static site and deployed to GitHub Pages.

## Stack

- [Next.js](https://nextjs.org/) 14 (App Router), static export (`output: 'export'`)
- TypeScript · Tailwind CSS
- Markdown content via `react-markdown`
- No database, no CMS — content lives in typed files under `content/` and `data/`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site → ./out
```

## Content model

Edit content without touching components:

```
data/            profile, navigation, featured
content/         experience, case-studies, writing, point-of-view, operating-model, bio, readme
app/             routes + sitemap / robots / opengraph-image
components/      header, footer, cards, markdown renderer, primitives
```

## Deploy (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and
publishes it to Pages. In the repo: **Settings → Pages → Build and deployment → Source: GitHub
Actions**.

This build serves from the site root — correct for a user site (`<username>.github.io`) or a custom
domain. If you deploy to a project path (`<username>.github.io/<repo>/`), set `basePath` and
`assetPrefix` in `next.config.mjs` to `/<repo>`.

## License

Content and copy © Chris McFadden. Code may be reused for reference.
