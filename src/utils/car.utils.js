export const COLLECTION_LABEL = {
  "new-models": "New Models",
  "luxury-collection": "Luxury Collection",
  "best-selling-models": "Best-Selling Models",
};

export const buildModelOptions = (cars) => {
  const unique = new Map();
  for (const car of cars) {
    if (!unique.has(car.id)) unique.set(car.id, car);
  }

  return Array.from(unique.values()).sort((a, b) => {
    const typeCompare = a.type.localeCompare(b.type);
    if (typeCompare !== 0) return typeCompare;
    const nameCompare = a.name.localeCompare(b.name);
    if (nameCompare !== 0) return nameCompare;
    const aCollection = a.collection ?? "";
    const bCollection = b.collection ?? "";
    return aCollection.localeCompare(bCollection);
  });
};

