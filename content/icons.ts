/**
 * Icon registry (design system 5.5).
 * Illustrative icons: Icons8 "Stickers" style → /public/icons/stickers (256px PNG)
 * UI glyphs: Icons8 "Puffy" style (chevron and plus: "Windows 11 Outline") → /public/icons/ui (96px PNG)
 * IDs are the Icons8 icon IDs returned by the Icons8 MCP, kept for licensing and re-download.
 * Free Icons8 use requires the "Icons by Icons8" link rendered in the footer.
 */
export const stickers = {
  "magic-wand": "Cz3e756vTqrp",
  palette: "pL35aZJlKvyz",
  binoculars: "TGYZ700E16qB",
  "treasure-chest": "K18A1WRGEfQO",
  castle: "CiTuoRYW5rLJ",
  dragon: "0JV5v0mnTXFm",
  "treasure-map": "ZWRS7whIeexW",
  "sailing-ship": "EeLumAL3phNx",
  "crescent-moon": "xpGFKizgK1gs",
  crown: "hwUKruv55ExN",
  children: "331lTu4QFYd5",
  family: "tvZygIMI1LDv",
  "extended-family": "ngTK5hcBn8yA",
  "teddy-bear": "kFhtWdw2Hd60",
  books: "BxuTSqg9XJpB",
  book: "YH3Hu6RmBIfG",
  "love-book": "cNWlGigna0zR",
  pencil: "6ExjWWj6a5p3",
  gift: "UDDUYWPLoNks",
  "birthday-cake": "ghQXdYSJXwEA",
  balloons: "TbLjisjaBIcJ",
  confetti: "Y5aZfNrkloFz",
  firework: "VsIez3YA81Ny",
  shield: "xx5EZBmSK6bn",
  rocket: "LXdi0FHIXqOb",
  star: "7EoumkdcLQEo",
  rainbow: "3Xq2C8dugi6O",
  clapperboard: "2WEOYXo2Gqkt",
  quote: "K0FvrPbK1yro",
  "speech-bubble": "u4nn0D6xeMqv",
} as const;

export const glyphs = {
  search: "2p5T24DyQa3J",
  bag: "XzHfAHWqWogK",
  menu: "IaGsWcNQwtg9",
  close: "5MMXjz5xwQvy",
  "chevron-down": "uz03unbAxueT",
  "arrow-right": "rM2nN8owozla",
  plus: "354k6pS0PoMI",
  check: "0AUe0fpTPlTW",
  instagram: "KSb7TGHNAz7Q",
  facebook: "B8BIScCjAa8m",
  youtube: "0GblQASl31Ge",
  whatsapp: "LaYpw2ASb5QR",
  mail: "yb9uLNmOthyQ",
} as const;

export type StickerName = keyof typeof stickers;
export type GlyphName = keyof typeof glyphs;

export const stickerSrc = (name: StickerName) => `/icons/stickers/${name}.png`;
export const glyphSrc = (name: GlyphName) => `/icons/ui/${name}.png`;
