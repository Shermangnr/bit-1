'use strict';

const $formularioContacto = document.getElementById("formularioContacto");

$formularioContacto.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = $formularioContacto.nombre.value;
    const mensaje = $formularioContacto.mensaje.value;

    console.log(nombre);
    console.log(mensaje);

    const result = `Hola ${nombre}, gracias por tu mensaje: ${mensaje}, Pronto te respondere!. `;
    alert(result);
    $formularioContacto.reset();
});

//Efecto de vidrio al hacer scroll
window.addEventListener("scroll", function () {
    const nav = document.querySelector(".menu-navegacion");
    if (window.scrollY > 2) {
    nav.classList.add("glass");
    } else {
    nav.classList.remove("glass");
    }
});

//Alerta de bootstrap 5
document.addEventListener("DOMContentLoaded", function () {
    const alerta = document.getElementById("alerta-construccion");
    const enlaces = document.querySelectorAll('.nav-link[href="#"]');

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            
            alerta.classList.remove("d-none"); // Mostrar
            // Forzar reflujo para reiniciar animación si se muestra varias veces
            void alerta.offsetWidth;
            alerta.classList.add("show");

            // Ocultar después de 5 segundos
            setTimeout(() => {
                alerta.classList.remove("show");
                setTimeout(() => {
                    alerta.classList.add("d-none");
                }, 500); // Esperar la transición antes de ocultar
            }, 3000);
        });
    });
});
