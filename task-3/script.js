const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close");

// poulating images from assets
const images = [
    "./assets/image1.png",
    "./assets/image2.png",
    "./assets/image3.png",
    "./assets/image1.png",
    "./assets/image2.png",
    "./assets/image3.png"
];


// matching thumbnails
for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.src = images[i];
    img.classList.add("thumb");

    gallery.appendChild(img);
}


gallery.addEventListener("click", (e) => {

    // this is to ensure only image click triggers active and not empty clicks on container
    if (e.target.classList.contains("thumb")) {
        modal.classList.add("active");
        modalImg.src = e.target.src;
    }
});


// Close modal by clicking btn
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});


// Close modal by clicking outside image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});


// Close modal by esc key (just for learning i tried different options)
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("active");
    }
});