// ==============================
// AÑO ACTUAL
// ==============================

const anio = document.getElementById("anio");

if (anio) {

    anio.textContent =
        new Date().getFullYear();

}


// ==============================
// FORMULARIO
// ==============================

const formulario =
    document.getElementById("formRegistro");


if (formulario) {

    formulario.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            // Aquí agregaremos después
            // la validación y el envío
            // del correo.

        }
    );

}