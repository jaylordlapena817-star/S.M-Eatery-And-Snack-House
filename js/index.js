// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// ==========================
// BACK TO TOP
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.className = "back-to-top";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topButton.classList.add("show");
    }else{
        topButton.classList.remove("show");
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
