# Integrain Foundation — Next.js 15

Converted from WordPress (Avada theme) to Next.js 15 + Tailwind CSS.  
Images served from Cloudflare R2.

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Cloudflare R2 (image CDN)
- Lucide React icons

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in your keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Upload Images to R2

Extract your WordPress uploads folder from the .wpress backup (rename to .tar, open with 7-Zip), then:

```bash
# Configure rclone for R2 first (one time)
rclone config
# → New remote → name: r2 → type: S3 → provider: Cloudflare
# → endpoint: https://7f636ef0bc5669723b0689fb353a0023.r2.cloudflarestorage.com
# → Access Key ID + Secret from Cloudflare R2 API tokens

# Upload
bash upload-to-r2.sh "D:\path\to\wp-content\uploads"
```

## R2 Config
- Account ID: `7f636ef0bc5669723b0689fb353a0023`
- Bucket: `integrain`
- Public URL: `https://pub-cdc8320e15f144d09aa5d89f402c22d0.r2.dev`
- Images path: `/images/`

All image references live in `src/lib/images.ts`.

## Project Structure

```
src/
  app/              # 55 pages (App Router)
  components/
    Navbar.tsx
    Footer.tsx
    forms/          # 8 form components
      FormField.tsx
      ContactForm.tsx
      VolunteerForm.tsx
      WhistleblowerForm.tsx
      PartnerForm.tsx
      ProjectProposalForm.tsx
      ResearchInitiativeForm.tsx
      StockDonationForm.tsx
      NewsletterForm.tsx
  data/
    posts.ts        # 17 blog posts
  lib/
    images.ts       # All R2 image constants
```

## To Do
- [ ] Wire contact forms to Resend (see src/app/api/contact/route.ts)
- [ ] Add Stripe/PayPal to donate page
- [ ] Replace temp homepage with home-original content (pending export)
- [ ] Upload images to R2 (run upload-to-r2.sh)
- [ ] Add custom domain to R2 bucket (optional)
