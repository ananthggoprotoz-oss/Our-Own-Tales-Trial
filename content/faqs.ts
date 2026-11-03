import type { Faq } from "@/types/content";

/**
 * Part 3 — the six recommended homepage questions.
 * Answers are written to avoid promising anything not yet confirmed
 * (production times, delivery windows, return windows). Review before launch.
 */
export const homepageFaqs: Faq[] = [
  {
    id: "personalise",
    question: "How can I personalise my child's storybook?",
    answer:
      "Start by choosing a story, then add your child's name. It appears on the cover and throughout the adventure. Depending on the story, you can also include family members such as a sibling, parents or grandparents, choose between our two illustration styles, and write a personal dedication for the first page.",
  },
  {
    id: "styles",
    question: "Can I choose between the two illustration styles?",
    answer:
      "Yes. While personalising, you can switch between Whimsical & Magical, with dreamy watercolours and soft light, and Cinematic & Immersive, with expressive 3D characters and dramatic lighting, and preview your story in each before you order. If a particular story is available in only one style, you'll see that on its page.",
  },
  {
    id: "preview",
    question: "Can I preview the book before purchasing?",
    answer:
      "Yes. Once you've added your child's details, you'll see a preview of the personalised story, including the cover and representative inside pages, before anything goes in your cart. You can go back and edit the name, family members, style or dedication at any point before you order. Printed colours can differ slightly from your screen.",
  },
  {
    id: "formats",
    question: "What's the difference between hardcover and softcover?",
    answer:
      "Both editions contain the same personalised story and illustrations. The hardcover has a firm, rigid cover and is made to be kept and reread for years. The softcover is lighter and more flexible, which makes it a good everyday read and the lower-priced option. The exact materials, binding and price for each edition are listed on every story's page.",
  },
  {
    id: "delivery",
    question: "How long does shipping and delivery take?",
    answer:
      "Every book is printed to order, so production time is added to delivery time. We show the estimated production and delivery window for your location before you pay, and email you tracking details once your book ships. During our launch period, shipping is free. Deliveries can take a little longer around festivals and public holidays.",
  },
  {
    id: "damaged",
    question: "What happens if my book arrives damaged?",
    answer:
      "We're sorry if that happens. Send us a photo of the damage along with your order number and we'll arrange a replacement copy of your personalised book. Our Returns & Refunds page explains the full policy, including what we do if there is a printing error or a spelling mistake in the personalisation.",
  },
];
