export function calculateTotal(cart) {
  // calcualte total amount of items
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  // computing tax and discount
  const tax = subtotal * 0.1;
  const discount = subtotal > 3000 ? 200 : 0;

  return {
    subtotal,
    tax,
    discount,
    total: subtotal + tax - discount
  };
}