'use strict';

// const $formularioContacto = document.getElementById("formularioContacto");

// $formularioContacto.addEventListener("submit", (event) => {
//     event.preventDefault();
    
//     const nombre = $formularioContacto.nombre.value;
//     const mensaje = $formularioContacto.mensaje.value;

//     console.log(nombre);
//     console.log(mensaje);
    
//     const result = `${nombre}, gracias por tu mensaje: ${mensaje}, Pronto te respondere!. `;
//     alert(result);
//     $formularioContacto.reset();
// });

//Efecto de vidrio al hacer scroll
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".menu-navegacion");
    if (window.scrollY > 2) {
    nav.classList.add("glass");
    } else {
    nav.classList.remove("glass");
    }
});

// Mostrar 3 tarjetas al mismo tiempo
// const carousel = document.querySelector('#productCarousel .carousel-inner');
// const items = document.querySelectorAll('#productCarousel .carousel-item');
// const cardWidth = items[0].offsetWidth;
// const visibleCards = 3;

// // Clona tarjetas para mantener al menos 3 visibles
// items.forEach((el, index) => {
// for (let i = 1; i < visibleCards; i++) {
//     let next = items[(index + i) % items.length].cloneNode(true);
//     el.querySelector('.row').appendChild(next.querySelector('.col-md-4'));
// }
// });

