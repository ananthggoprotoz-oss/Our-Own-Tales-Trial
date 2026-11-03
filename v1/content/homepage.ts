import { routes } from "@/v1/lib/routes";
import { primaryCta } from "@/v1/content/site";

/**
 * Homepage copy, section by section, from
 * our_own_tales_homepage_structure_and_information_architecture.md (Part 1).
 */

export const announcement = {
  offer: "A little magic, a special price! ✨ Get 15% OFF your first storybook.",
  shipping: "Free shipping during our launch period",
  shippingCta: { label: "Shop the collection", href: routes.stories },
};

export const hero = {
  eyebrow: "Personalised stories. Little heroes. Big imaginations.",
  title: {
    lead: "Every",
    highlight: "little hero",
    middle: "deserves a story of their",
    pill: "own.",
  },
  description:
    "Choose a magical adventure, personalise it with your child's name, and turn an ordinary story into something extraordinary.",
  primaryCta: { label: "Explore Storybooks", href: routes.stories },
  secondaryCta: { label: "How it works", href: routes.howItWorks },
  caption: "A glimpse of the magical world, starring your little one.",
  demo: {
    label: "Your child's name",
    placeholder: "Type a name to see the magic",
    defaultName: "Aarav",
  },
};

export const trustBenefits = [
  { id: "personalised", title: "Personalised stories", text: "Made specially for your little hero" },
  { id: "styles", title: "Two visual styles", text: "Choose their favourite storybook world" },
  { id: "preview", title: "Preview before purchase", text: "Review your personalised story" },
  { id: "keepsake", title: "Made to keep", text: "A physical keepsake to treasure" },
] as const;

export const explore = {
  eyebrow: "Explore storybooks",
  title: "Find the right story without browsing the whole shelf.",
  intro: "Explore by your child's age, by the kind of adventure they love, or by who joins them in the story.",
};

export const featured = {
  eyebrow: "Featured stories",
  title: "The stories little heroes love the most.",
  intro: "Hand-picked adventures to begin with. Every one is personalised with your child's name.",
  cta: { label: "See all storybooks", href: routes.stories },
  cardCta: "Personalise this story",
};

export const howItWorks = {
  eyebrow: "How it works",
  title: "Your story. Your little hero. Your way.",
  steps: [
    {
      number: "01",
      title: "Choose a story",
      text: "Find an adventure that matches your child's age and interests.",
    },
    {
      number: "02",
      title: "Make it personal",
      text: "Add your child's name and optionally include family members.",
    },
    {
      number: "03",
      title: "Choose your style",
      text: "Pick Whimsical & Magical or Cinematic & Immersive.",
    },
    {
      number: "04",
      title: "Make it a keepsake",
      text: "Add a dedication, choose hardcover or softcover, and preview your book.",
    },
  ],
  cta: primaryCta,
};

export const personalisation = {
  eyebrow: "Make it their story",
  title: "Make it their story.",
  intro: "Every book is built around your child. Here is what changes the moment you add their details.",
  items: [
    { id: "cover", title: "Their name on the cover", text: "The title of the book carries your child's name." },
    { id: "story", title: "Their name woven into the story", text: "Characters call them by name throughout the adventure." },
    { id: "hero", title: "Your child as the central character", text: "The hero of the adventure is your little one." },
    { id: "family", title: "Family members in the scenes", text: "Optionally add a sibling, parents or grandparents where the story allows." },
    { id: "dedication", title: "A personalised dedication", text: "Your own message, printed on the first page." },
  ],
  privacy: {
    title: "Your little one's privacy matters.",
    text: "We use personalisation information only to create your storybook and handle your order. We take care to protect your family's information.",
    link: { label: "Read our privacy policy", href: routes.privacy },
  },
  cta: primaryCta,
};

export const styles = {
  eyebrow: "Two magical styles",
  title: "Two magical styles.",
  intro: "The same story scene, told in two different worlds. Pick the one your child will love most.",
  options: [
    {
      id: "whimsical",
      name: "Whimsical & Magical",
      points: ["Dreamy watercolours", "Soft light", "Gentle textures", "Imaginative worlds"],
    },
    {
      id: "cinematic",
      name: "Cinematic & Immersive",
      points: ["Expressive 3D characters", "Dramatic lighting", "Depth and perspective", "Spectacular environments"],
    },
  ],
  cta: { label: "Explore both storybook styles", href: routes.styles },
} as const;

export const inside = {
  eyebrow: "Inside the storybook",
  title: "See exactly what you're buying.",
  intro: "Sample pages and the full specifications of every book, so there are no surprises when it arrives.",
  pageText: {
    left: "Far beyond the sleepy hills, where the clouds forgot to float, stood a castle that no one had visited in a hundred years.",
    right: "“Someone has to knock,” said {name}, straightening the crown. And with one deep breath, {name} did.",
  },
  specsTitle: "Specifications",
  specsNote: "Final specifications are listed on every product page.",
};

export const formats = {
  eyebrow: "Made to be kept",
  title: "Made to be kept.",
  intro: "Two formats, the same personalised story and illustrations inside.",
  note: "Both editions contain identical printed content. Prices shown are for a single personalised book.",
};

export const gift = {
  eyebrow: "A gift that means more",
  title: "A gift that means more.",
  intro: "A personalised storybook is the present they open again and again. Add a dedication and it becomes theirs forever.",
  occasions: ["Birthdays", "Baby showers and new arrivals", "Sibling celebrations", "Festivals and holidays", "Special family occasions"],
  dedication: {
    heading: "For {name}",
    body: "Our brave little explorer. May every page remind you how loved you are, today and always.",
    from: "With all our love, Amma & Appa",
  },
  cta: { label: "Find a gift story", href: routes.stories },
};

export const reviewsSection = {
  eyebrow: "What parents are saying",
  title: "What parents are saying.",
  intro: "Genuine words from families who read with us, with their permission.",
  sampleNote: "Sample reviews are shown until the first customer reviews are collected.",
};

export const faqSection = {
  eyebrow: "FAQs",
  title: "The questions parents ask us most.",
  intro: "Quick answers before you start personalising. The full Help Centre has everything else.",
  link: { label: "Visit the Help Centre", href: routes.help },
};

export const finalCta = {
  title: "Their next favourite story starts here.",
  text: "Give your little one an adventure they'll always remember.",
  cta: { label: "Find Their Story", href: routes.stories },
};
