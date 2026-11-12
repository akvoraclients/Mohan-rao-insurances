# Vercel Deployment Guide — Insurance Services Web Platform

A step-by-step deployment guide for the **Professional Insurance Services Web Platform** (`insurance-services-web`).

This guide covers everything needed to take this Next.js 15 statically exported bilingual website from a local repository to a live, production-grade deployment on **Vercel** with a custom domain, Formspree notifications, and zero server maintenance costs.

---

## 1. Prerequisites Checklist

Before beginning deployment, ensure you have:

- [ ] A **GitHub**, **GitLab**, or **Bitbucket** account.
- [ ] A free **Vercel** account (sign up at [vercel.com](https://vercel.com) using your Git provider).
- [ ] Working local copies of **Node.js** (v18+ or v20+) and **npm**.
- [ ] Configured business information in `src/lib/constants.ts`.
- [ ] A free **Formspree** account ([formspree.io](https://formspree.io)) for receiving customer enquiry emails.

---

## 2. Architecture & Static Export

This project is configured with `output: "export"` in `next.config.ts`. When built, Next.js generates pure static HTML, CSS, client-side JavaScript, and SVG assets in the `out/` directory.

### Key Benefits
- **Zero Cold Starts**: Served directly from Vercel's global Edge Network.
- **Maximum Security**: Zero server-side runtime attack surface.
- **Cost Effective**: Runs completely within Vercel's generous free tier.
- **Blazing Fast Performance**: TTFB < 50ms across India and globally.

---

## 3. Pre-Deployment Verification

Run the following commands locally to verify that there are no TypeScript or build errors:

```bash
# 1. Type-check all files
npx tsc --noEmit

# 2. Build production static export
npm run build
```

Verify that the build generates all insurance routes:
- `/en` and `/ta` (Homepage)
- `/en/about` and `/ta/about` (About page)
- `/en/insurance` and `/ta/insurance` (Insurance services portal)
- `/en/contact` and `/ta/contact` (Contact page)
- `/en/success` and `/ta/success` (Enquiry submission confirmation)

---

## 4. Deploying to Vercel

### Step 4.1: Push to Git

Push your project to GitHub, GitLab, or Bitbucket:

```bash
git add .
git commit -m "feat: insurance-only web platform transformation"
git push origin main
```

### Step 4.2: Import into Vercel

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** > **Project**.
3. Select your Git repository from the list and click **Import**.
4. Configure Project Settings:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `out` (automatically detected from `next.config.ts`)
5. Click **Deploy**.

---

## 5. Connecting a Custom Domain

1. In the Vercel Dashboard, go to your Project > **Settings** > **Domains**.
2. Enter your client's registered domain name and click **Add**.
3. Follow the DNS instructions provided by Vercel:
   - For Apex domain (`example.com`): Add an `A` record pointing to `76.76.21.21`.
   - For Subdomain (`www.example.com`): Add a `CNAME` record pointing to `cname.vercel-dns.com`.
4. Vercel will automatically provision a free SSL/TLS certificate.

---

## 6. Formspree Configuration

The website includes two enquiry forms:
1. **General Enquiry Form** (`src/components/forms/EnquiryForm.tsx`)
2. **Insurance Consultation Form** (`src/components/forms/InsuranceEnquiryForm.tsx`)

Both forms submit directly to the Formspree endpoint configured in `src/lib/constants.ts`:

```typescript
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_formspree_id';
```

In your Formspree dashboard:
- Set up notification emails to forward submissions to the agency's official inbox.
- Enable spam protection filters.

---

## 7. Verification Checklist

- [ ] All pages load cleanly (`/en`, `/ta`, `/en/about`, `/ta/about`, `/en/insurance`, `/ta/insurance`, `/en/contact`, `/ta/contact`).
- [ ] English/Tamil language switcher works across all pages.
- [ ] Both enquiry forms submit successfully and forward to `/[lang]/success`.
- [ ] Mobile responsive drawer menu opens and navigates properly.
- [ ] All non-insurance legacy routes and services are absent on the live deployment.
