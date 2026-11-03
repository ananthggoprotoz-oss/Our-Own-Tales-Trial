import { routes } from "@/v1/lib/routes";

export type NavLink = { label: string; href: string; description?: string };
export type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "menu"; label: string; href: string; links: NavLink[] };

/** Part 4 — Recommended main navigation. V3 change: no "Home" link; the logo links home. */
export const mainNavigation: NavItem[] = [
  {
    kind: "menu",
    label: "Explore Stories",
    href: routes.stories,
    links: [
      { label: "Shop All", href: routes.stories, description: "Every storybook in the collection" },
      { label: "By Age", href: routes.byAge, description: "1–3, 3–6 and 6+ years" },
      { label: "By Story Type", href: routes.byType, description: "Fantasy, adventure and bedtime" },
      { label: "By Family", href: routes.byFamily, description: "Siblings, parents and grandparents" },
      { label: "Featured Stories", href: routes.featured, description: "Hand-picked adventures" },
    ],
  },
  { kind: "link", label: "How It Works", href: routes.howItWorks },
  { kind: "link", label: "About Us", href: routes.about },
  {
    kind: "menu",
    label: "Help",
    href: routes.help,
    links: [
      { label: "FAQs", href: routes.faqs },
      { label: "Shipping & Delivery", href: routes.shipping },
      { label: "Returns & Refunds", href: routes.returns },
      { label: "Contact Us", href: routes.contact },
    ],
  },
];

/** Section 15 — footer link groups. */
export const footerNavigation: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Shop",
    links: [
      { label: "All Storybooks", href: routes.stories },
      { label: "By Age", href: routes.byAge },
      { label: "By Story Type", href: routes.byType },
      { label: "By Family", href: routes.byFamily },
      { label: "Create Your Storybook", href: routes.create },
    ],
  },
  {
    heading: "Discover",
    links: [
      { label: "How It Works", href: routes.howItWorks },
      { label: "About Us", href: routes.about },
      { label: "Featured Stories", href: routes.featured },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "FAQs", href: routes.faqs },
      { label: "Shipping & Delivery", href: routes.shipping },
      { label: "Returns & Refunds", href: routes.returns },
      { label: "Contact", href: routes.contact },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: routes.privacy },
      { label: "Terms & Conditions", href: routes.terms },
    ],
  },
];
