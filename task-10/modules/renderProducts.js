export function renderProducts(products, container) {
  container.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${p.image}">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <button data-id="${p.id}">Add</button>
    `;

    container.appendChild(div);
  });
}