# DEPLOYMENT

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

## Install Dependencies

```bash
pnpm install
```

or

```bash
npm install
```

## Development Server

```bash
pnpm dev
```

Open `http://localhost:3000`

## Build Static Export

```bash
pnpm build
```

This generates a static site in the `out/` folder.

Configuration in `next.config.mjs`:

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`

## Deploy `/out` Folder

Upload the contents of `out/` to any static host:

- Nginx / Apache
- AWS S3 + CloudFront
- Cloudflare Pages
- Netlify
- GitHub Pages (with appropriate base path if needed)

Point your domain `itxnetworks.com` to the deployed static files.

## Post-Deploy Checks

- Verify all routes load with trailing slashes
- Test contact form success modal
- Test career application modal and fake API call
- Confirm `sitemap.xml` and `robots.txt` are accessible
