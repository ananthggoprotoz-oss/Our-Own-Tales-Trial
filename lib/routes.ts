/**
 * Central route registry. Every link on the site points here, so a URL can be
 * changed in one place. Pages that are not built yet render a branded
 * "coming soon" page from src/app/[...slug]/page.tsx instead of a 404.
 */
export const routes = {
  home: "/",
  stories: "/stories",
  featured: "/stories/featured",
  byAge: "/stories/age",
  byType: "/stories/type",
  byFamily: "/stories/family",
  story: (slug: string) => `/stories/${slug}`,
  create: "/create",
  createStory: (slug: string) => `/create?story=${slug}`,
  howItWorks: "/how-it-works",
  about: "/about",
  help: "/help",
  faqs: "/help/faqs",
  shipping: "/help/shipping-and-delivery",
  returns: "/help/returns-and-refunds",
  contact: "/contact",
  privacy: "/privacy-policy",
  terms: "/terms-and-conditions",
  search: "/search",
  cart: "/cart",
  styles: "/how-it-works#styles",
} as const;

/** Collection filters used by "Explore storybooks". */
export const collectionRoutes = {
  age: (id: string) => `/stories/age/${id}`,
  type: (id: string) => `/stories/type/${id}`,
  family: (id: string) => `/stories/family/${id}`,
} as const;

export type PlannedPage = {
  path: string;
  title: string;
  description: string;
};

/**
 * Pages from the information architecture (Part 4) that are planned for launch.
 * Each renders the ComingSoon template until its real page is built.
 */
export const plannedPages: PlannedPage[] = [
  { path: routes.stories, title: "All Storybooks", description: "The complete collection, with search, sort and filters." },
  { path: routes.featured, title: "Featured Stories", description: "Hand-picked adventures to begin with." },
  { path: routes.byAge, title: "Explore by Age", description: "Stories grouped by age." },
  { path: "/stories/age/1-3", title: "Stories for 1–3 years", description: "Gentle first stories for the littlest heroes." },
  { path: "/stories/age/3-6", title: "Stories for 3–6 years", description: "Big adventures for curious preschoolers." },
  { path: "/stories/age/6-plus", title: "Stories for 6+ years", description: "Longer quests for confident young readers." },
  { path: routes.byType, title: "Explore by Story Type", description: "Fantasy, adventure and bedtime stories." },
  { path: "/stories/type/fantasy", title: "Fantasy stories", description: "Dragons, castles and a sprinkle of magic." },
  { path: "/stories/type/adventure", title: "Adventure stories", description: "Maps, islands and brave discoveries." },
  { path: "/stories/type/bedtime", title: "Bedtime stories", description: "Soft, sleepy stories for the end of the day." },
  { path: routes.byFamily, title: "Explore by Family", description: "Stories that can include the people they love." },
  { path: "/stories/family/solo", title: "Just me, the little hero", description: "Stories starring your child on their own." },
  { path: "/stories/family/sibling", title: "Me and my sibling", description: "Adventures for brothers and sisters." },
  { path: "/stories/family/parents", title: "Me and my parents", description: "Stories with Amma, Appa, Mum or Dad along for the ride." },
  { path: "/stories/family/grandparents", title: "Me and my grandparents", description: "Stories that make room for grandparents." },
  { path: "/stories/the-dragons-secret", title: "The Dragon's Secret", description: "Product details page." },
  { path: "/stories/the-sleepy-moon", title: "The Sleepy Moon", description: "Product details page." },
  { path: "/stories/the-lost-island", title: "The Lost Island", description: "Product details page." },
  { path: "/stories/the-festival-of-a-thousand-lights", title: "The Festival of a Thousand Lights", description: "Product details page." },
  { path: routes.create, title: "Create Your Storybook", description: "The five-step personalisation journey: name, characters, style, details, preview." },
  { path: routes.howItWorks, title: "How It Works", description: "Your story. Your little hero. Your way." },
  { path: routes.about, title: "About Us", description: "Why we make personalised storybooks." },
  { path: routes.help, title: "Help Centre", description: "Answers to common questions about ordering, personalisation and delivery." },
  { path: routes.faqs, title: "FAQs", description: "Frequently asked questions, organised by topic." },
  { path: routes.shipping, title: "Shipping & Delivery", description: "Production times, delivery timelines, tracking and delivery regions." },
  { path: routes.returns, title: "Returns & Refunds", description: "Eligibility, damage, defects and corrections." },
  { path: routes.contact, title: "Contact Us", description: "How to reach our support team." },
  { path: routes.privacy, title: "Privacy Policy", description: "How we handle personalisation data and children's privacy." },
  { path: routes.terms, title: "Terms & Conditions", description: "Purchase and service terms." },
  { path: routes.search, title: "Search", description: "Search the storybook collection." },
  { path: routes.cart, title: "Your Cart", description: "Selected storybooks, formats and quantities." },
];

export function findPlannedPage(path: string) {
  return plannedPages.find((page) => page.path === path);
}
