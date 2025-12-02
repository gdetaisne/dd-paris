export type Item = { slug: string; title: string };

export const QUARTIERS: Item[] = [
  { slug: "paris-1er-louvre", title: "Paris 1er – Louvre" },
  { slug: "paris-4e-hotel-de-ville", title: "Paris 4e – Hôtel-de-Ville" },
  { slug: "paris-5e-quartier-latin", title: "Paris 5e – Quartier Latin" },
  { slug: "paris-6e-saint-germain", title: "Paris 6e – Saint‑Germain‑des‑Prés" },
  { slug: "paris-18e-montmartre", title: "Paris 18e – Montmartre" },
];

export const COMMUNES: Item[] = [];
// Communes satellites à créer ultérieurement
// Communes satellites à créer ultérieurement

export function urlForQuartier(slug: string) {
  return `/paris/${slug}/`;
}
export function urlForCommune(slug: string) {
  return `/devis-demenagement-${slug}/`;
}
