import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge must know that the design-system type scale classes
 * (defined in globals.css) are font-size utilities, otherwise it treats
 * `text-h2` as a colour and drops it when a text colour is also passed.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": ["text-display-hero", "text-h1", "text-h2", "text-h3", "text-h4", "text-h5", "text-body-lg", "text-caption"],
    },
  },
});

/** Merge Tailwind class names safely. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Horizontal position of a comparison-slider divider, matching the centre of the
 * range input's thumb (`--compare-thumb` wide) so the divider stays under the pointer.
 */
export function compareEdge(percent: number) {
  return `(var(--compare-thumb, 48px) / 2 + (100% - var(--compare-thumb, 48px)) * ${percent / 100})`;
}

/** Replace `{name}` in a template with the child's name. */
export function personalise(template: string, name: string) {
  return template.replaceAll("{name}", name);
}

/** Title-case a typed name the way it would be printed in a book. */
export function formatChildName(raw: string, fallback: string) {
  const cleaned = raw.replace(/\s+/g, " ").trim().slice(0, 24);
  if (!cleaned) return fallback;
  return cleaned
    .split(" ")
    .map((part) => part.charAt(0).toLocaleUpperCase("en-IN") + part.slice(1))
    .join(" ");
}
