import type { AgeBand, BookFormat, FamilyOption, Specification, Story, StoryType } from "@/types/content";
import { inr } from "@/lib/currency";

/* ------------------------------------------------------------------
   SAMPLE CATALOGUE
   Titles, taglines, prices and specifications below are placeholders
   so the homepage can be reviewed. Replace them with the real stories,
   printer-confirmed specifications and final pricing before launch.
   Age brackets and category names should match the actual stories.
   ------------------------------------------------------------------ */

export const ageBands: AgeBand[] = [
  { id: "1-3", label: "1–3 years" },
  { id: "3-6", label: "3–6 years" },
  { id: "6-plus", label: "6+ years" },
];

export const storyTypes: StoryType[] = [
  { id: "fantasy", label: "Fantasy" },
  { id: "adventure", label: "Adventure" },
  { id: "bedtime", label: "Bedtime" },
];

export const familyOptions: FamilyOption[] = [
  { id: "solo", label: "Just me, the little hero" },
  { id: "sibling", label: "Me and my sibling" },
  { id: "parents", label: "Me and my parents" },
  { id: "grandparents", label: "Me and my grandparents" },
];

export const bookFormats: BookFormat[] = [
  {
    id: "hardcover",
    name: "Hardcover",
    description: "A more substantial keepsake-style book with a firm cover.",
    price: inr(1299), // V3: set by the user, 3 November 2026
    details: [
      { label: "Cover", value: "Rigid, wipe-clean printed board" }, // TODO: confirm with printer
      { label: "Binding", value: "Section-sewn and case-bound" }, // TODO: confirm with printer
      { label: "Best for", value: "Gifting and keeping for years" },
    ],
  },
  {
    id: "softcover",
    name: "Softcover",
    description: "A lighter, more flexible option for everyday reading.",
    price: inr(999), // V3: set by the user, 3 November 2026
    details: [
      { label: "Cover", value: "Thick, flexible laminated card" }, // TODO: confirm with printer
      { label: "Binding", value: "Perfect bound" }, // TODO: confirm with printer
      { label: "Best for", value: "Everyday reading and travel" },
    ],
  },
];

/** Section 10 — specifications panel. Publish the printer-confirmed values. */
export const specifications: Specification[] = [
  { label: "Book size", value: "21 × 21 cm" }, // TODO: actual width × height
  { label: "Page count", value: "24 printed pages" }, // TODO: actual page count
  { label: "Paper weight", value: "170 GSM art paper" }, // TODO: internal page GSM
  { label: "Cover weight", value: "300 GSM (softcover) · rigid board (hardcover)" }, // TODO
  { label: "Printing", value: "Full-colour digital print" }, // TODO: verify print method
  { label: "Binding", value: "Perfect bound (softcover) · section-sewn (hardcover)" }, // TODO
  { label: "Cover", value: "Hardcover or softcover" },
  { label: "Illustration", value: "Whimsical & Magical or Cinematic & Immersive" },
  { label: "Dedication", value: "Personalised message printed on the first page" },
];

export const stories: Story[] = [
  {
    id: "dragons-secret",
    slug: "the-dragons-secret",
    titleTemplate: "{name} and the Dragon's Secret",
    tagline: "A shy dragon, a hidden castle and one brave little hero who dares to say hello.",
    ageBand: "3-6",
    storyType: "fantasy",
    familyOptions: ["solo", "sibling", "parents"],
    formats: ["hardcover", "softcover"],
    styles: ["whimsical", "cinematic"],
    fromPrice: inr(999), // V3: the softcover price, the lowest edition
    cover: { palette: "purple", motif: "dragon", image: "/brand/hero-art.png" },
    featured: true,
    sample: true,
  },
  {
    id: "sleepy-moon",
    slug: "the-sleepy-moon",
    titleTemplate: "{name} and the Sleepy Moon",
    tagline: "A gentle bedtime journey to tuck the moon in, one star at a time.",
    ageBand: "1-3",
    storyType: "bedtime",
    familyOptions: ["solo", "parents", "grandparents"],
    formats: ["hardcover", "softcover"],
    styles: ["whimsical", "cinematic"],
    fromPrice: inr(999), // V3: the softcover price, the lowest edition
    cover: { palette: "lavender", motif: "moon" },
    featured: true,
    sample: true,
  },
  {
    id: "lost-island",
    slug: "the-lost-island",
    titleTemplate: "Captain {name} and the Lost Island",
    tagline: "Set sail with a map, a parrot and a crew of friends to find the island no one can find.",
    ageBand: "6-plus",
    storyType: "adventure",
    familyOptions: ["solo", "sibling"],
    formats: ["hardcover", "softcover"],
    styles: ["whimsical", "cinematic"],
    fromPrice: inr(999), // V3: the softcover price, the lowest edition
    cover: { palette: "orange", motif: "ship" },
    featured: true,
    sample: true,
  },
  {
    id: "thousand-lights",
    slug: "the-festival-of-a-thousand-lights",
    titleTemplate: "{name} and the Festival of a Thousand Lights",
    tagline: "When the lamps won't glow, one little hero lights up the whole town.",
    ageBand: "3-6",
    storyType: "fantasy",
    familyOptions: ["solo", "parents", "grandparents"],
    formats: ["hardcover", "softcover"],
    styles: ["whimsical", "cinematic"],
    fromPrice: inr(999), // V3: the softcover price, the lowest edition
    cover: { palette: "yellow", motif: "lantern" },
    featured: true,
    sample: true,
  },
];

export const featuredStories = stories.filter((story) => story.featured);

export const labelFor = {
  age: (id: Story["ageBand"]) => ageBands.find((band) => band.id === id)?.label ?? id,
  type: (id: Story["storyType"]) => storyTypes.find((type) => type.id === id)?.label ?? id,
  format: (id: BookFormat["id"]) => bookFormats.find((format) => format.id === id)?.name ?? id,
};
