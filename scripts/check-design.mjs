#!/usr/bin/env node
/**
 * Design-system guard (design system v1.1).
 *  1. No bold weights: font-bold / font-extrabold / font-black are not allowed (use font-semibold).
 *  2. 8-point spacing: spacing and sizing utilities must use even Tailwind steps (multiples of 8px).
 *     Step 1 (4px) is the only allowed half-step. Fractional steps (0.5, 1.5, 2.5…) and odd steps (3, 5, 7…) fail.
 *     Arbitrary values in px/rem must be multiples of 8px (or exactly 4px).
 *  3. No arbitrary pixel font sizes (text-[15px]); use the type scale.
 * Motion utilities (translate, rotate, scale) and percentages are exempt.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SRC = join(ROOT, "src");

const SPACING_PREFIXES = [
  "p", "px", "py", "pt", "pr", "pb", "pl", "ps", "pe",
  "m", "mx", "my", "mt", "mr", "mb", "ml", "ms", "me",
  "gap", "gap-x", "gap-y", "space-x", "space-y",
  "inset", "inset-x", "inset-y", "top", "right", "bottom", "left", "start", "end",
  "size", "w", "h", "min-w", "min-h", "max-w", "max-h",
  "scroll-mt", "scroll-pt", "scroll-mb", "scroll-pb",
];
const prefixPattern = SPACING_PREFIXES.sort((a, b) => b.length - a.length).map((p) => p.replace("-", "\\-")).join("|");
const SPACING_RE = new RegExp(`^(?:${prefixPattern})-(.+)$`);

function files(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return files(full);
    return /\.(tsx?|jsx?)$/.test(name) ? [full] : [];
  });
}

function stripVariant(token) {
  // Remove variant prefixes like md:, hover:, group-hover/btn:, [&>svg]: while respecting brackets.
  let depth = 0;
  let last = -1;
  for (let i = 0; i < token.length; i += 1) {
    const c = token[i];
    if (c === "[") depth += 1;
    else if (c === "]") depth -= 1;
    else if (c === ":" && depth === 0) last = i;
  }
  return token.slice(last + 1).replace(/^!/, "").replace(/^-/, "");
}

function pxValues(arbitrary) {
  const values = [];
  for (const match of arbitrary.matchAll(/(-?\d*\.?\d+)(px|rem)\b/g)) {
    const n = Number(match[1]);
    values.push(match[2] === "rem" ? n * 16 : n);
  }
  return values;
}

function spacingProblem(value) {
  if (value === "px" || value === "full" || value === "auto" || value === "screen" || value === "fit" || value === "min" || value === "max" || value === "dvh" || value === "svh") return null;
  if (/^\d+\/\d+$/.test(value)) return null; // fractions
  if (/^(xs|sm|md|lg|xl|\dxl|prose|none)$/.test(value)) return null; // max-w scales
  if (/^\d+(\.\d+)?$/.test(value)) {
    const step = Number(value);
    if (step === 0 || step === 1) return null; // 0 and the 4px half-step
    if (Number.isInteger(step) && step % 2 === 0) return null; // multiples of 8px
    return `step ${value} = ${step * 4}px is off the 8-point grid`;
  }
  if (value.startsWith("[") && value.endsWith("]")) {
    const bad = pxValues(value).filter((px) => !(px === 0 || Math.abs(px) === 4 || Math.abs(px) % 8 === 0));
    return bad.length ? `arbitrary value ${value} contains ${bad.join(", ")}px` : null;
  }
  return null;
}

const problems = [];
for (const file of files(SRC)) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  lines.forEach((line, index) => {
    for (const raw of line.split(/[\s"'`{}(),]+/)) {
      if (!raw || raw.length > 120) continue;
      const token = stripVariant(raw);
      if (/^font-(bold|extrabold|black)$/.test(token)) problems.push([file, index + 1, raw, "bold weight: use font-semibold (600)"]);
      if (/^text-\[\d+(\.\d+)?px\]$/.test(token)) problems.push([file, index + 1, raw, "arbitrary px font size: use the type scale"]);
      const m = token.match(SPACING_RE);
      if (m) {
        const issue = spacingProblem(m[1]);
        if (issue) problems.push([file, index + 1, raw, issue]);
      }
    }
  });
}

if (problems.length) {
  for (const [file, line, token, issue] of problems) console.log(`${relative(ROOT, file)}:${line}  ${token}  → ${issue}`);
  console.log(`\n✖ ${problems.length} design-system issue(s)`);
  process.exit(1);
}
console.log("✓ Design check passed: semibold-only type, 8-point spacing, scale-based font sizes");
