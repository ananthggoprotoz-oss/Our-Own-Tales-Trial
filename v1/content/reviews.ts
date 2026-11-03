import type { Review } from "@/v1/types/content";

/**
 * SAMPLE REVIEWS — these are illustrative only and are labelled "Sample" on the
 * page. Do not publish them as genuine testimonials. Replace with real customer
 * reviews (with permission) and set `sample: false` or remove the flag.
 */
export const reviews: Review[] = [
  {
    id: "r1",
    quote: "She gasped when she saw her own name on the cover. We've read it every single night since.",
    name: "Priya S.",
    context: "Mum of Anaya, 4 · Bengaluru",
    rating: 5,
    verifiedPurchase: false,
    sample: true,
  },
  {
    id: "r2",
    quote: "The hardcover feels like a proper keepsake. Thaatha and Paati made it into the story too, which made everyone cry a little.",
    name: "Karthik R.",
    context: "Dad of Vihaan, 6 · Chennai",
    rating: 5,
    verifiedPurchase: false,
    sample: true,
  },
  {
    id: "r3",
    quote: "We previewed every page before paying, so there were no surprises. The dedication page is my favourite part.",
    name: "Neha & Arjun M.",
    context: "Parents of Ira, 3 · Pune",
    rating: 5,
    verifiedPurchase: false,
    sample: true,
  },
  {
    id: "r4",
    quote: "Gave it for a first birthday. The parents said it was the only gift that wasn't a toy and the only one they kept out on the shelf.",
    name: "Sunita D.",
    context: "Gifted for a nephew · Hyderabad",
    rating: 5,
    verifiedPurchase: false,
    sample: true,
  },
];
