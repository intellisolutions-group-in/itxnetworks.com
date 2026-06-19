# SETUP

## Company Details

Update `data/company.json` with:

- Brand name, email, established year
- Phone number (when available)
- Phone number (when available)
- Office addresses in `data/offices.json`
- Social links (`instagram`, `facebook`) when available

## Logo

1. Place your logo at `public/images/logo.svg`
2. Uncomment the `Image` block in `components/site/site-logo.tsx`
3. Comment out or remove the placeholder square logo block

Recommended sizes:

- Header: 40px height (desktop), 32px (mobile)
- Footer: 32px height

## Phone Number

Uncomment phone display blocks in:

- `components/landing/footer-section.tsx`
- `app/contact/page.tsx`
- Set `phone` in `data/company.json`

## Office Addresses

1. Add entries to `data/offices.json`
2. Uncomment office sections in `app/about/page.tsx` and `app/contact/page.tsx`

## Social Media Links

Only Instagram and Facebook are supported.

1. Set URLs in `data/company.json` under `social`
2. Uncomment the social links block in `components/landing/footer-section.tsx`

## Services

- Service list: `data/services.json`
- Detailed content: `lib/service-details.ts`

## Other Data Files

- `data/testimonials.json`
- `data/faq.json`
- `data/careers.json`
- `data/portfolio.json`
- `data/blog.json`

## Blog Posts

Add or edit articles in `data/blog.json`. Each post needs:

- `slug`, `title`, `excerpt`, `category`, `publishedDate`, `author`, `readTime`, `tags`, `contentParagraphs`

Routes:

- Listing: `/blog/`
- Detail: `/blog/[slug]/`

## Images

Place images under `public/images/` and reference them in page content or data files as needed.
