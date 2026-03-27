const container = document.getElementById("container");
const loading = document.getElementById("loading");

let page = 1;
let isLoading = false;


// fetch data from dummy api
async function fetchData() {
    //avoid multiple api calls
    if (isLoading) return;

    isLoading = true;
    // display loading 
    loading.style.display = "block";

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
        const data = await res.json();

        // each card
        data.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("card");

            div.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.body}</p>
      `;

            container.appendChild(div);
        });

        page++;

    } catch (err) {
        console.error("Error fetching data:", err);
    }
    // after fetching and added loading is disabled
    loading.style.display = "none";
    isLoading = false;
}


// Detect scroll
window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= fullHeight - 100) {
        fetchData();
    }
});


// Initial load
fetchData();