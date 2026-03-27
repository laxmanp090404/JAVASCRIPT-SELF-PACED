// select container i want ot change based on routes
const app = document.getElementById("app");

// define routes and its elements
const routes = {
    home: `
    <h2>Home</h2>
    <p>Welcome to the Home Page</p>
  `,
    about: `
    <h2>About</h2>
    <p>This is a simple SPA using hash routing.</p>
  `,
    contact: `
    <h2>Contact</h2>
    <p>Email: laxman@gmail.com</p>
  `
};


// Load content based on hash
function loadRoute() {
    const hash = window.location.hash.slice(1); //removing #

    //animation
    app.classList.add("fade-out");

    setTimeout(() => {
        if (routes[hash]) {
            app.innerHTML = routes[hash];
        } else {
            // fallback page
            app.innerHTML = "<h2>404 - Page Not Found</h2>";
        }
        app.classList.remove("fade-out");

    }, 200);
}


// eventlistener to hash changes
window.addEventListener("hashchange", loadRoute);

// Loading initial route
window.addEventListener("load", () => {
    if (!window.location.hash) {
        window.location.hash = "#home";
    } else {
        loadRoute();
    }
});