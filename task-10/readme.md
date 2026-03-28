# E-Commerce Shoping Cart

## Features

1. Filter products by category:
	 - All
	 - Figures
	 - Clothing
	 - Posters
2. Add products to cart.
3. Update quantity directly from cart.
4. Remove cart items.
5. Automatic billing summary:
	 - Subtotal
	 - Tax (10%)
	 - Discount (Rs 200 when subtotal > Rs 3000)
	 - Total
6. Cart remains saved using `localStorage`.


## Module Responsibilities

- `main.js`
	- App entry point
	- Connects UI with product rendering, filters, cart actions, and totals

- `data/products.js`
	- Static product catalog data

- `modules/renderProducts.js`
	- Renders product cards in the product section

- `modules/filters.js`
	- Product category filtering
	- Search by product name

- `modules/cart.js`
	- Add to cart
	- Remove item
	- Update quantity
	- Expose cart state

- `modules/storage.js`
	- Save/load cart data via `localStorage`

- `modules/utils.js`
	- Billing calculations (subtotal, tax, discount, total)

