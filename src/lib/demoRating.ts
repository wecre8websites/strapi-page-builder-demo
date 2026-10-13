/**
 * Demo-only placeholder star rating. It is derived from a seed (the product id) so the server and the browser render the
 * same number; Math.random() during render breaks hydration as soon as a page is server rendered.
 */
const demoRating = (seed: string, locale = "en", min = 1, max = 5) => {
  let hash = 0;
  for (const char of seed) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return new Intl.NumberFormat(locale, { style: "decimal", maximumSignificantDigits: 2 }).format((hash % 1000) / 1000 * (max - min) + min);
};

export default demoRating;
