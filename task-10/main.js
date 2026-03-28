// since modular we can use import statements
//unlike const import in cjs files
import { products } from "./data/products.js";
import { renderProducts } from "./modules/renderProducts.js";
import { addToCart, getCart, removeItem, updateQty } from "./modules/cart.js";
import { filterCategory, searchProducts } from "./modules/filters.js";
import { calculateTotal } from "./modules/utils.js";

const productContainer = document.getElementById("products");
const cartItems = document.getElementById("cartItems");
const totalDiv = document.getElementById("total");

const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");

//initially all products are added to filtered using spread op
let filteredProducts = [...products];

// render cart
function renderCart() {
  const cart = getCart();
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      ${item.name} x 
      <input type="number" value="${item.qty}" min="1" data-id="${item.id}">
      <button data-remove="${item.id}">X</button>
    `;

    cartItems.appendChild(div);
  });

  const totals = calculateTotal(cart);
  totalDiv.innerHTML = `
    <p>Subtotal: ₹${totals.subtotal}</p>
    <p>Tax: ₹${totals.tax}</p>
    <p>Discount: ₹${totals.discount}</p>
    <h3>Total: ₹${totals.total}</h3>
  `;
}

// product click
// since button is dynamic element
// selecting it is also dynamic
productContainer.addEventListener("click", e => {
  //if the click is on a button element
  if (e.target.tagName === "BUTTON") {

    const id = +e.target.dataset.id;
    const product = products.find(p => p.id === id);
    addToCart(product);
    renderCart();
  }
});

// cart actions
cartItems.addEventListener("input", e => {
  if (e.target.type === "number") {
    // + for type conversion from string to number
    // data-attribute is resolved as e.target.dataset.attribute
    updateQty(+e.target.dataset.id, +e.target.value);
    renderCart();
  }
});

cartItems.addEventListener("click", e => {
  if (e.target.dataset.remove) {
    removeItem(+e.target.dataset.remove);
    renderCart();
  }
});

// search + filter
searchInput.addEventListener("input", () => {
  const query = searchInput.value;
  const category = filterSelect.value;

  filteredProducts = searchProducts(products, query);
  filteredProducts = filterCategory(filteredProducts, category);

  renderProducts(filteredProducts, productContainer);
});

filterSelect.addEventListener("change", () => {
  const query = searchInput.value;
  const category = filterSelect.value;

  filteredProducts = searchProducts(products, query);
  filteredProducts = filterCategory(filteredProducts, category);

  renderProducts(filteredProducts, productContainer);
});

// initial render
renderProducts(products, productContainer);
renderCart();