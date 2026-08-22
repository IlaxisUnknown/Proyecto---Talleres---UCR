// ==============================
// AÑO ACTUAL
// ==============================

const anio = document.getElementById("anio");

if (anio) {

    anio.textContent =
        new Date().getFullYear();

}


const formulario = document.getElementById("formRegistro");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    let valido = true;


    // ==============================
    // OBTENER CAMPOS
    // ==============================

    const nombre =
        document.getElementById("nombre").value.trim();

    const apellidos =
        document.getElementById("apellidos").value.trim();

    const correo =
        document.getElementById("correo").value.trim();

    const telefono =
        document.getElementById("telefono").value.trim();

    const taller =
        document.getElementById("taller").value;

    const fecha =
        document.getElementById("fecha").value;


    // ==============================
    // LIMPIAR ERRORES
    // ==============================

    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorApellidos").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorTelefono").textContent = "";
    document.getElementById("errorTaller").textContent = "";
    document.getElementById("errorFecha").textContent = "";


    // ==============================
    // VALIDAR NOMBRE
    // ==============================

    if (nombre === "") {

        document.getElementById("errorNombre").textContent =
            "Debe ingresar su nombre.";

        valido = false;

    }


    // ==============================
    // VALIDAR APELLIDOS
    // ==============================

    if (apellidos === "") {

        document.getElementById("errorApellidos").textContent =
            "Debe ingresar sus apellidos.";

        valido = false;

    }


    // ==============================
    // VALIDAR CORREO
    // ==============================

    if (correo === "") {

        document.getElementById("errorCorreo").textContent =
            "Debe ingresar su correo.";

        valido = false;

    }


    // ==============================
    // VALIDAR TELÉFONO
    // ==============================

    if (telefono === "") {

        document.getElementById("errorTelefono").textContent =
            "Debe ingresar su teléfono.";

        valido = false;

    }


    // ==============================
    // VALIDAR TALLER
    // ==============================

    if (taller === "") {

        document.getElementById("errorTaller").textContent =
            "Debe seleccionar un taller.";

        valido = false;

    }


    // ==============================
    // VALIDAR FECHA
    // ==============================

    if (fecha === "") {

        document.getElementById("errorFecha").textContent =
            "Debe seleccionar una fecha.";

        valido = false;

    }


    // ==============================
    // SI TODO ESTÁ CORRECTO
    // ==============================

    if (valido) {

        emailjs
            .sendForm(
                "service_shsmpal",
                "template_peqmuwv",
                formulario
            )

            .then(function() {

                alert(
                    "¡Registro exitoso! " +
                    "Se ha enviado un correo de confirmación."
                );

                formulario.reset();

            })

.catch(function(error) {

    console.error("ERROR COMPLETO:", error);

    console.error("ERROR TEXT:", error.text);

    alert(
        "Error al enviar el correo:\n\n" +
        error.text
    );

});

    }

});