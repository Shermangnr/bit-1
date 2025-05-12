'use strict';

const $formularioContacto = document.getElementById("formularioContacto");
const $alerta = document.getElementById("alerta-contacto");
const $alertaTexto = document.getElementById("alerta-contacto-texto");

$formularioContacto.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = $formularioContacto.nombre.value;
    const correo = $formularioContacto.correo.value;
    const mensaje = $formularioContacto.mensaje.value;

    const result = `Hola ${nombre}, gracias por tu mensaje: "${mensaje}". ¡Pronto te responderé a este email: ${correo} !`;

    // Mostrar alerta visual
    $alertaTexto.textContent = result;
    $alerta.classList.remove("d-none");
    void $alerta.offsetWidth; // Forzar reflujo para reiniciar animación
    $alerta.classList.add("show");

    // Ocultar automáticamente después de 5 segundos
    setTimeout(() => {
        $alerta.classList.remove("show");
        setTimeout(() => {
            $alerta.classList.add("d-none");
        }, 400); // Esperar el fade-out
    }, 6000);

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
