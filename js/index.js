'use strict';

//Efecto de vidrio al hacer scroll
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".menu-navegacion");
    if (window.scrollY > 2) {
    nav.classList.add("glass");
    } else {
    nav.classList.remove("glass");
    }
});


