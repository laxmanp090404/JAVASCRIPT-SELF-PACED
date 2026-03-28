import { saveCart, loadCart } from "./storage.js";
// load cart from localstorage
let cart = loadCart();

export function addToCart(product) {
  // check if already exists
  const item = cart.find(i => i.id === product.id);
  if (item) item.qty++;
  else cart.push({ ...product, qty: 1 });

  saveCart(cart);
}

// remove item from cart
export function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
}

export function updateQty(id, qty) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty = qty;
  saveCart(cart);
}

export function getCart() {
  return cart;
}