import type { Money } from "@/types/content";

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** Money is stored in paise (integer) to avoid floating-point errors in checkout later. */
export function formatMoney(money: Money) {
  return formatter.format(money.amount / 100);
}

export function inr(rupees: number): Money {
  return { amount: Math.round(rupees * 100), currency: "INR" };
}
