import { routes } from "@/v1/lib/routes";

/**
 * Site-wide configuration. Values marked TODO must be confirmed before launch.
 */
export const siteConfig = {
  name: "Our Own Tales",
  legalName: "Our Own Tales", // TODO: registered business name once incorporated
  tagline: "Personalised stories. Little heroes. Big imaginations.",
  promise: "Every child deserves to be the hero.",
  description:
    "Personalised children's storybooks where your child is the hero. Choose a magical adventure, add their name and family, pick an illustration style, preview every page and order a printed keepsake.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en-IN",
  country: "India",
  contactEmail: "hello@ourowntales.in", // TODO: confirm support inbox
  /** Social links are only rendered when a URL is set. */
  social: {
    instagram: "", // e.g. https://instagram.com/ourowntales
    facebook: "",
    youtube: "",
    whatsapp: "", // e.g. https://wa.me/91XXXXXXXXXX
  },
  /** Launch promotions (homepage structure doc, section 01 and Part 2). */
  promotions: {
    firstOrderDiscountPercent: 15,
    launchFreeShipping: true,
  },
  copyrightYear: 2026,
} as const;

export const primaryCta = { label: "Create Your Storybook", href: routes.create };
