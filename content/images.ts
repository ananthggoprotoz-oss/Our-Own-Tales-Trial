import type { SiteImage } from "@/types/content";

/**
 * Lifestyle photography (design system 5.2 and 5.6).
 * Hot-linked from Unsplash under the Unsplash License for the pre-launch build.
 * Never use these next to reviews or present them as customers or our printed books.
 * Replace with owned photography before or soon after launch; keep credits for any you retain.
 */
const unsplash = (id: string, w: number, h: number, crop = "faces,entropy") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&crop=${crop}&w=${w}&h=${h}&q=75`;

export const images = {
  /* Hero: the arch row of little heroes either side of the storybook */
  heroGirlYellow: {
    src: unsplash("photo-1599409275265-9608ce2c0136", 480, 640),
    alt: "A smiling young girl in a yellow checked dress",
    width: 480,
    height: 640,
    credit: { name: "Isfak Himu", url: "https://unsplash.com/@isfakulhemal" },
  },
  heroBoyYellow: {
    src: unsplash("photo-1608764589882-975eecf78107", 480, 640),
    alt: "A smiling young boy in a yellow puffer jacket",
    width: 480,
    height: 640,
    credit: { name: "Ashwini Chaudhary (Monty)", url: "https://unsplash.com/@suicide_chewbacca" },
  },
  heroBabyLaughing: {
    src: unsplash("photo-1780329934635-3a1b7ac5dc31", 480, 640),
    alt: "A baby laughing in an orange armchair",
    width: 480,
    height: 640,
    credit: { name: "Rohit Dey", url: "https://unsplash.com/@rohit16dey" },
  },
  heroGirlOrange: {
    src: unsplash("photo-1774437898386-ccb4bf8ab61d", 480, 640),
    alt: "A girl in an orange top smiling at the camera",
    width: 480,
    height: 640,
    credit: { name: "Tanmay Abhay Mahajan", url: "https://unsplash.com/@mr_bond1999" },
  },
  /* Explore by age */
  ageBaby: {
    src: unsplash("photo-1780329935489-b7b4d5d834e4", 640, 800),
    alt: "A smiling baby wearing a yellow top and a bindi",
    width: 640,
    height: 800,
    credit: { name: "Rohit Dey", url: "https://unsplash.com/@rohit16dey" },
  },
  agePreschool: {
    src: unsplash("photo-1785393153500-f7be1fc84271", 640, 800),
    alt: "A little girl in traditional clothes smiling beside a basket of flowers",
    width: 640,
    height: 800,
    credit: { name: "Jithin Murali", url: "https://unsplash.com/@jithinmurali" },
  },
  /* V3 change: the user's own photo (brand/Resources/boy image.png), not Unsplash */
  ageOlder: {
    src: "/photos/age-6-plus.jpg",
    alt: "A smiling young boy in a blue striped vest",
    width: 500,
    height: 632,
  },
  /* Made to be kept */
  storyTime: {
    src: unsplash("photo-1504151932400-72d4384f04b3", 800, 1040, "entropy"),
    alt: "A parent holding a baby and reading a colourful picture book together",
    width: 800,
    height: 1040,
    credit: { name: "Picsea", url: "https://unsplash.com/@picsea" },
  },
  /* A gift that means more (V3 change: the user's photo, brand/Resources/Book Gift.jpg, cropped to 4:5 at x 1610) */
  giftFamily: {
    src: "/photos/gift-family.jpg",
    alt: "A father smiling as he holds out a wrapped gift while a mother hugs their daughter",
    width: 1000,
    height: 1250,
  },
  /* Inside the storybook (V3 change: the user's spread, brand/Resources/Inside book.png; the name printed in it is "Aarav") */
  insideSpread: {
    src: "/photos/inside-spread.jpg",
    alt: "An open storybook: a boy in a crown looks up at a castle above the clouds, and the facing page reads, “Someone has to knock,” said Aarav, straightening the crown. And with one deep breath, Aarav did.",
    width: 1536,
    height: 1024,
  },
} satisfies Record<string, SiteImage>;

export const brandAssets = {
  logo: { src: "/brand/logo.png", width: 1000, height: 980, alt: "Our Own Tales" },
  /** The logo illustration without the wordmark: the hero bursting out of an open storybook. */
  heroArt: { src: "/brand/hero-art.png", width: 1000, height: 502, alt: "" },
  heroChild: { src: "/brand/hero-child.png", width: 500, height: 420, alt: "" },
} as const;
