import type { Locale } from "../content/types";

function formatPoint(iso: string, locale: Locale): string {
  if (iso.length === 4) return iso;
  const parts = iso.split("-");
  const yearStr = parts[0];
  const monthStr = parts[1];
  if (yearStr === undefined || monthStr === undefined) return iso;
  const year = Number(yearStr);
  const month = Number(monthStr);
  if (Number.isNaN(year) || Number.isNaN(month)) return iso;
  const formatter = new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-US", {
    month: "short",
    year: "numeric",
  });
  return formatter.format(new Date(year, month - 1));
}

export function formatPeriod(start: string, end: string | null, locale: Locale, presentLabel: string): string {
  return formatPoint(start, locale) + " – " + (end ? formatPoint(end, locale) : presentLabel);
}
