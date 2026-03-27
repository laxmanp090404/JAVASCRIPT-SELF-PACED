# Infinite Scrolling

## Features

- **Infinite Scroll Detection:** Automatically fetches new content when user scrolls near the bottom.
- **API Integration:** Fetches posts from JSONPlaceholder API in paginated batches.
- **Loading State:** Displays a loading indicator while fetching data.
- **Duplicate Prevention:** Prevents multiple simultaneous API calls with an `isLoading` flag.


## Core Logic

### 1. Fetch and Render Function
The `fetchData()` function handles API calls with built-in safeguards:

```javascript
async function fetchData() {
  if (isLoading) return;  // Guard clause: prevent concurrent calls

  isLoading = true;
  loading.style.display = "block";

  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
    );
    const data = await res.json();

    data.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `<h4>${item.title}</h4><p>${item.body}</p>`;
      container.appendChild(div);
    });

    page++;  // Increment page for next fetch
  } catch (err) {
    console.error("Error fetching data:", err);
  }

  loading.style.display = "none";
  isLoading = false;
}
```


### 2. Scroll Detection
The scroll event calculates the user's position relative to page height:

```javascript
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= fullHeight - 100) {
    fetchData();
  }
});
```
### 3. Initial Load
```javascript
fetchData();  // Prime the feed on page load
```

This ensures users see content immediately without scrolling.

