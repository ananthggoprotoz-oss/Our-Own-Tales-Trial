import type { SiteImage } from "@/v1/types/content";

/**
 * Lifestyle photography (design system 5.2 and 5.6).
 * Hot-linked from Unsplash under the Unsplash License for the pre-launch build.
 * Never use these next to reviews or present them as customers or our printed books.
 * Replace with owned photography before or soon after launch; keep credits for any you retain.
 */
const unsplash = (id: string, w: number, h: number, crop = "faces,entropy") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&crop=${crop}&w=${w}&h=${h}&q=75`;

export const images = {
  /* Hero */
  heroFamily: {
    src: unsplash("photo-1639979511572-ff346bc5b3b7", 800, 800),
    alt: "A smiling mother, father and daughter sitting together outdoors",
    width: 800,
    height: 800,
    credit: { name: "Anil Sharma", url: "https://unsplash.com/@anil_sharma_india" },
  },
  heroGrandma: {
    src: unsplash("photo-1624434070018-4a74c7d91715", 480, 480),
    alt: "A grandmother laughing as her granddaughter whispers in her ear",
    width: 480,
    height: 480,
    credit: { name: "Ajin K S", url: "https://unsplash.com/@ajinks" },
  },
  /* Explore by age */
  ageBaby: {
    src: unsplash("photo-1571195927971-79e45068be9b", 720, 900),
    alt: "A happy baby in a striped top smiling up from a soft blanket",
    width: 720,
    height: 900,
    credit: { name: "Pranav Kumar Jain", url: "https://unsplash.com/@peejayvisual" },
  },
  agePreschool: {
    src: unsplash("photo-1552040448-d3f412b8e020", 720, 900),
    alt: "A little boy wearing a red superhero cape, playing outdoors",
    width: 720,
    height: 900,
    credit: { name: "Gabriel Porras", url: "https://unsplash.com/@gabrielizalo" },
  },
  ageOlder: {
    src: unsplash("photo-1774437894079-e560a59632f2", 720, 900),
    alt: "A young girl in traditional Indian clothes holding a book and smiling",
    width: 720,
    height: 900,
    credit: { name: "Tanmay Abhay Mahajan", url: "https://unsplash.com/@mr_bond1999" },
  },
  /* Made to be kept */
  storyTime: {
    src: unsplash("photo-1504151932400-72d4384f04b3", 960, 1200, "entropy"),
    alt: "A father holding his baby and reading a colourful picture book together",
    width: 960,
    height: 1200,
    credit: { name: "Picsea", url: "https://unsplash.com/@picsea" },
  },
  /* A gift that means more */
  siblingsGift: {
    src: unsplash("photo-1687253957319-5ef3f897195d", 1200, 960),
    alt: "Two young brothers sitting on the floor unwrapping a present together",
    width: 1200,
    height: 960,
    credit: { name: "Annie Spratt", url: "https://unsplash.com/@anniespratt" },
  },
  /* FAQ */
  grandmotherBaby: {
    src: unsplash("photo-1768657891765-2c5619ba1914", 800, 1000),
    alt: "A grandmother in a red sari smiling down at a baby on a bed",
    width: 800,
    height: 1000,
    credit: { name: "Rohit Dey", url: "https://unsplash.com/@rohit16dey" },
  },
  /* Final call to action */
  familyShoulders: {
    src: unsplash("photo-1582771801019-03164036ed31", 480, 480),
    alt: "A girl laughing on her father's shoulders beside her mother",
    width: 480,
    height: 480,
    credit: { name: "Rajesh Rajput", url: "https://unsplash.com/@rrajputphotography" },
  },
  childrenSmiling: {
    src: unsplash("photo-1497486751825-1233686d5d80", 480, 480),
    alt: "Five children smiling together outdoors",
    width: 480,
    height: 480,
    credit: { name: "LJ", url: "https://unsplash.com/@lorenmary" },
  },
} satisfies Record<string, SiteImage>;

export const brandAssets = {
  logo: { src: "/brand/logo.png", width: 1000, height: 750, alt: "Our Own Tales" },
  heroScene: { src: "/brand/hero-scene.png", width: 820, height: 520, alt: "" },
  /** V3: full-bleed hero cover art, from brand/Resources (768 × 1152). */
  heroCover: { src: "/brand/hero-cover.jpg", width: 768, height: 1152, alt: "" },
  heroChild: { src: "/brand/hero-child.png", width: 500, height: 420, alt: "" },
} as const;
