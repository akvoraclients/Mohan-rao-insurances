# M. Mohan Rao – LIC Financial Advisor Web Platform

A high-performance, bilingual (English & Tamil) web platform and digital advisory portal for **M. Mohan Rao**, Chairman's Club Member and MDRT Financial Advisor with **Life Insurance Corporation of India (LIC)** (Agency Code: `0195676N`), built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

The project is pre-configured for static export (`output: "export"`) with zero-runtime-server dependencies, providing instant edge delivery, zero cold starts, and full mobile responsiveness.

---

## 1. Client Identity & Credentials

- **Advisor Name:** M. Mohan Rao
- **Organization:** Life Insurance Corporation of India (LIC)
- **Designation:** Chairman's Club Member & Financial Advisor
- **LIC Agency Code:** `0195676N`
- **Distinctions:**
  - **MDRT Member** (Million Dollar Round Table)
  - **Chairman's Club Member for Agents** (LIC of India)
- **Primary Mobile:** `+91 95002 53993` (`tel:+919500253993`)
- **WhatsApp:** `+91 94435 64017` (`https://wa.me/919443564017`)
- **Email:** `mmrthorvath@gmail.com` (`mailto:mmrthorvath@gmail.com`)
- **Public Business Address:** `Bye-Pass Road, Hosur - 635109, Tamil Nadu, India.`
- **Google Maps Office Search:** `https://www.google.com/maps/search/?api=1&query=Bye-Pass+Road,+Hosur+-+635109,+Tamil+Nadu,+India`

> **Confidentiality Notice:** The advisor's residential address is strictly confidential and is not published anywhere on the website.

---

## 2. Platform Architecture & Objectives

- **Independent Advisory Portal:** Communicates trustworthy, experienced, customer-focused life insurance guidance without pretending to be the official LIC corporate portal.
- **Bilingual Parity:** Comprehensive parity across English (`en`) and Tamil (`ta`), with culturally appropriate localized terminology and metadata.
- **LIC-Inspired Visual Identity:**
  - Primary: Deep Navy Blue (`#0B3B60`)
  - Accent: Warm Gold / Yellow (`#F59E0B` / `#D97706`)
  - Secondary / Background: Pure White and Crisp Slate (`#F8FAFC`)
- **Factual & Compliant Disclosure:** Clear adherence to IRDAI intermediary disclosures, confirming that all life insurance policies, underwriting, premium receipts, and claim payouts are issued directly by the Life Insurance Corporation of India.
- **Formspree Integration:** Preserved working Formspree endpoint (`https://formspree.io/f/xqppwdnq`) with client-side validation, anti-spam honeypot, and localized success redirection.

---

## 3. Core Life Insurance Portfolios

The website presents verified LIC policy solutions within the advisor's actual authorized scope:

1. **Term Life Insurance (Pure Protection)**:
   - High financial risk cover at affordable premiums to secure dependents against life uncertainties.
2. **Endowment & Savings Plans**:
   - Disciplined savings combined with life insurance cover and maturity benefits.
3. **Children's Education & Future Planning**:
   - Assured milestone funding for children's higher education and marriage requirements.
4. **Retirement & Pension Solutions**:
   - Guaranteed lifelong annuities ensuring financial independence in retirement.
5. **Money Back & Milestone Plans**:
   - Periodic liquidity payouts with continuous life cover throughout the policy term.
6. **Policyholder Servicing & Claims Support**:
   - Timely renewal reminders, official online portal payment assistance, policy revival guidance, loan against policy procedures, and death/maturity claim documentation support.

---

## 4. Routing Structure

All routes are fully static and pre-rendered in both English and Tamil:

| Route | Description |
| :--- | :--- |
| `/` | Root language redirector (reads `localStorage` or defaults to `/en`) |
| `/[lang]` (`/en`, `/ta`) | Redesigned Homepage with Hero, MDRT & Chairman's Club showcases, and LIC portfolios |
| `/[lang]/about` (`/en/about`, `/ta/about`) | Profile of M. Mohan Rao, agency credentials, and advisory philosophy |
| `/[lang]/insurance` (`/en/insurance`, `/ta/insurance`) | In-depth LIC insurance categories, servicing scope, and FAQs |
| `/[lang]/contact` (`/en/contact`, `/ta/contact`) | Verified contact channels (Phone, WhatsApp, Email, Office) and enquiry form |
| `/[lang]/success` (`/en/success`, `/ta/success`) | Localized confirmation page after successful form submission |

---

## 5. Development & Production Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript typecheck
npx tsc --noEmit

# Build production static export to out/
npm run build
```

---

## 6. Regulatory & Intermediary Disclaimer

M. Mohan Rao is an authorized Life Insurance Corporation of India (LIC) Agent and Financial Advisor (Agency Code: `0195676N`). This website is an independent financial advisor platform operated to provide policy information, guidance, and policyholder servicing. This website is not an official corporate website of the Life Insurance Corporation of India. All life insurance policies, terms, conditions, benefits, and claims are underwritten, approved, and settled exclusively by the Life Insurance Corporation of India in accordance with its regulatory rules and guidelines.
