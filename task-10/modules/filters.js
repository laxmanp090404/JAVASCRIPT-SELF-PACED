export function filterCategory(products, category) {
  if (category === "all") return products;
  return products.filter(p => p.category === category);
}

export function searchProducts(products, query) {
  return products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
}