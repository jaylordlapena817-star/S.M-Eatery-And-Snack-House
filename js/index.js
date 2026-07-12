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
