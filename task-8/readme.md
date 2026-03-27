# SPA Using Hashchange

## Features

- **Hash Routing:** Navigation between `Home`, `About`, and `Contact` sections without page reload.
- **Dynamic Content Rendering:** Content is injected into a single app container based on the URL hash.
- **404 Fallback:** Unknown routes display a fallback message.
- **Initial Route Handling:** Automatically sets `#home` if no hash is present on first load.


## Core Logic

### 1. Route Mapping
The `routes` object works like a mini route table.

```javascript
const routes = {
	home: `<h2>Home</h2><p>Welcome to the Home Page</p>`,
	about: `<h2>About</h2><p>This is a simple SPA using hash routing.</p>`,
	contact: `<h2>Contact</h2><p>Email: laxman@gmail.com</p>`
};
```

### 2. Route Loader Function
`loadRoute()` performs three key tasks:
- Extract route name from hash using `window.location.hash.slice(1)`.
- Apply animation class before swapping content.
- Render matched route or fallback content.

```javascript
function loadRoute() {
	const hash = window.location.hash.slice(1);
	app.classList.add("fade-out");

	setTimeout(() => {
		app.innerHTML = routes[hash] || "<h2>404 - Page Not Found</h2>";
		app.classList.remove("fade-out");
	}, 200);
}
```

### 3. Event-Driven Navigation
- `hashchange` calls `loadRoute()` whenever user navigates.
- On page load:
	- If no hash exists, set default `#home`.
	- Else load current route directly.

