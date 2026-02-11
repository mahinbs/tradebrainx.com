/**
 * Central SEO config. Override base URL via VITE_SITE_URL in .env for production.
 */
const getBaseUrl = () => {
  if (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) {
    return (import.meta.env.VITE_SITE_URL as string).replace(/\/$/, "");
  }
  return "https://tradebrainx.com";
};

export const SEO = {
  siteName: "tradebrainx.com",
  defaultTitle: "Next-Gen AI Market Predictions",
  defaultDescription:
    "Institutional-grade AI predictions for Stocks, Forex & Crypto. Data-driven probability models—not signals, not advice. Stop guessing, start calculating.",
  twitterHandle: "@TradeBrainXs",
  locale: "en_US",
  get baseUrl() {
    return getBaseUrl();
  },
  /** Full URL to default OG image (1200x630 recommended). */
  defaultOgImage: "/hero-bg-ai-trading.png",
} as const;

export function canonicalUrl(path: string): string {
  const base = SEO.baseUrl;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
