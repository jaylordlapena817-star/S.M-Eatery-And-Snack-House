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



// ==========================
// ORDER VIA MESSENGER
// ==========================

function orderFood(food) {

    const pageID = "61591766334503";


    const message = encodeURIComponent(
        `Hello S.M Eatery and Snack House! I would like to order ${food}.`
    );


    window.open(
        `https://m.me/${pageID}?text=${message}`,
        "_blank"
    );

}



// ==========================
// FIREBASE VISIT COUNT
// ==========================


import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import {

    getDatabase,
    ref,
    get,
    set

} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";



const firebaseConfig = {

apiKey: "AIzaSyDTJFiY42avRGMqtKrZB7gPhWL-ASTRh3w",

authDomain: "mybot-d79df.firebaseapp.com",

databaseURL: "https://mybot-d79df-default-rtdb.asia-southeast1.firebasedatabase.app",

projectId: "mybot-d79df",

storageBucket: "mybot-d79df.firebasestorage.app",

messagingSenderId: "215753443154",

appId: "1:215753443154:web:af883fb18af1d499a15c8b"

};



const app = initializeApp(firebaseConfig);

const db = getDatabase(app);



const visitRef = ref(db,"website/visits");



async function countVisit(){


    const snapshot = await get(visitRef);


    let visits = 0;


    if(snapshot.exists()){

        visits = snapshot.val();

    }



    visits++;


    await set(visitRef, visits);



    const display = document.getElementById("visitCount");


    if(display){

        display.innerText =
        visits.toLocaleString();

    }


}



countVisit();

// ==========================
// BEST SELLER SLIDER
// ==========================

const menuItems = [
    {
        name: "Papaitan",
        price: "Starting at ₱60",
        image: "image/foods/papaitan.jpeg"
    },
    {
        name: "Dinakdakan",
        price: "Starting at ₱60",
        image: "image/foods/dinakdakan.jpeg"
    },
    {
        name: "Dinuguan",
        price: "Starting at ₱60",
        image: "image/foods/dinuguan.jpeg"
    },
    {
        name: "Gulay",
        price: "Starting at ₱25",
        image: "image/foods/pinakbet.jpg"
    },
    {
        name: "Inihaw na Bangus",
        price: "₱230 Medium Size",
        image: "image/foods/inihaw_bangus.jpeg"
    },
    {
        name: "Inihaw na Tilapia",
        price: "₱100 - ₱150",
        image: "image/foods/inihaw_tilapia.jpeg"
    },
    {
        name: "Igado",
        price: "Starting at ₱60",
        image: "image/foods/igado.jpeg"
    },
    {
        name: "Pork Adobo",
        price: "Starting at ₱60",
        image: "image/foods/porkadobo.jpg"
    },
    {
        name: "Bopis",
        price: "Starting at ₱60",
        image: "image/foods/bopis.jpg"
    },
    {
        name: "Mami",
        price: "₱30 - ₱45",
        image: "image/foods/mami.jpg"
    },
    {
        name: "Ihaw",
        price: "Available",
        image: "image/foods/ihaw.jpeg"
    },
    {
        name: "Halo-Halo",
        price: "Available",
        image: "image/foods/halohalo.jpeg"
    }
];

const foodCard = document.getElementById("randomFood");

if (foodCard) {

    const img = document.getElementById("foodImg");
    const title = document.getElementById("foodName");
    const price = document.getElementById("foodPrice");

    let currentIndex = 0;

    function changeBestSeller() {

        const item = menuItems[currentIndex];

        foodCard.classList.remove("show");

        setTimeout(() => {

            img.src = item.image;
            img.alt = item.name;
            title.textContent = item.name;
            price.textContent = item.price;

            foodCard.onclick = () => orderFood(item.name);

            foodCard.classList.add("show");

        }, 300);

        currentIndex++;

        if (currentIndex >= menuItems.length) {
            currentIndex = 0;
        }
    }

    changeBestSeller();

    setInterval(changeBestSeller, 2000);
}
