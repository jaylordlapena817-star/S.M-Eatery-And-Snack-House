// ==========================
// GALLERY LIGHTBOX
// ==========================

const images = document.querySelectorAll(".gallery-item img");

const overlay = document.createElement("div");
overlay.className = "lightbox";

overlay.innerHTML = `
    <span class="close">&times;</span>
    <img src="" alt="Preview">
`;

document.body.appendChild(overlay);

const preview = overlay.querySelector("img");
const closeBtn = overlay.querySelector(".close");

images.forEach(image => {

    image.addEventListener("click", () => {

        preview.src = image.src;
        overlay.classList.add("show");

    });

});

closeBtn.addEventListener("click", () => {

    overlay.classList.remove("show");

});

overlay.addEventListener("click", (e) => {

    if(e.target === overlay){
        overlay.classList.remove("show");
    }

});
