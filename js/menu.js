// ==========================
// MENU SEARCH
// ==========================

const searchInput = document.getElementById("searchFood");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();
        const cards = document.querySelectorAll(".menu-card");

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(keyword)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}
