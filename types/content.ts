/** Money is stored as an integer amount of paise so that it is safe to use for payments later. */
export type Money = { amount: number; currency: "INR" };

export type AgeBandId = "1-3" | "3-6" | "6-plus";
export type StoryTypeId = "fantasy" | "adventure" | "bedtime";
export type FamilyOptionId = "solo" | "sibling" | "parents" | "grandparents";
export type BookFormatId = "hardcover" | "softcover";
export type IllustrationStyleId = "whimsical" | "cinematic";
export type CoverPalette = "purple" | "orange" | "yellow" | "lavender";
export type SceneMotif = "dragon" | "moon" | "ship" | "lantern";

export interface AgeBand {
  id: AgeBandId;
  label: string;
}

export interface StoryType {
  id: StoryTypeId;
  label: string;
}

export interface FamilyOption {
  id: FamilyOptionId;
  label: string;
}

export interface Story {
  id: string;
  slug: string;
  /** Use `{name}` where the child's name is printed. */
  titleTemplate: string;
  tagline: string;
  ageBand: AgeBandId;
  storyType: StoryTypeId;
  familyOptions: FamilyOptionId[];
  formats: BookFormatId[];
  styles: IllustrationStyleId[];
  fromPrice: Money;
  /** Cover look. `image` (when set) replaces the generated scene with real artwork. */
  cover: { palette: CoverPalette; motif: SceneMotif; image?: string };
  featured: boolean;
  /** Sample content shipped with the build; replace before launch. */
  sample?: boolean;
}

export interface BookFormat {
  id: BookFormatId;
  name: string;
  description: string;
  price: Money;
  details: { label: string; value: string }[];
}

export interface Specification {
  label: string;
  value: string;
}

export interface Review {
  id: string;
  quote: string;
  name: string;
  context: string;
  rating: 1 | 2 | 3 | 4 | 5;
  verifiedPurchase: boolean;
  /** Sample reviews are labelled on the page and must be replaced with genuine reviews. */
  sample?: boolean;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: { name: string; url: string };
}
