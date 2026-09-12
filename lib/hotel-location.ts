const locations: Record<string, string> = {
  reception: "Réception", "main-restaurant": "Restaurant principal", restaurant: "Restaurant principal",
  "indoor-pool": "Piscine couverte", pool: "Piscines extérieures", beach: "Plage de l’hôtel",
  "la-pergola": "La Pergola", oxygen: "Bar piscine Oxygen", "kids-club": "Mini Club",
};

export function getCurrentHotelLocation(location?: string | string[] | null) {
  const slug = Array.isArray(location) ? location[0] : location;
  if (!slug) return { slug: "reception", name: "Réception" };
  const normalized = slug.toLowerCase().trim();
  return { slug: normalized, name: locations[normalized] ?? "Réception" };
}
