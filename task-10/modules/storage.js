// keeping cart on localstorage
export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
//extracting from localstorage
export function loadCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}