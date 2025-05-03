'use strict';

const $formularioContacto = document.getElementById("formularioContacto");

$formularioContacto.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nombre = $formularioContacto.nombre.value;
    const mensaje = $formularioContacto.mensaje.value;

    console.log(nombre);
    console.log(mensaje);
    
    const result = `${nombre}, gracias por tu mensaje: ${mensaje}, Pronto te respondere!. `;
    alert(result);
    $formularioContacto.reset();
});

