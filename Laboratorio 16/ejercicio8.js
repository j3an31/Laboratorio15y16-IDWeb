const formulario = document.querySelector("form");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita envío si hay errores
    limpiarErrores();
    let valido = true;

    if (nombre.value.trim() === "") {
        mostrarError(nombre, "¡El nombre es obligatorio!");
        valido = false;
    }

    if (correo.value.trim() === "") {
        mostrarError(correo, "¡El correo es obligatorio!");
        valido = false;
    }

    if (valido) {
        alert("Formulario enviado correctamente");
        formulario.submit(); 
    }
});

function mostrarError(input, mensaje) {
    const span = document.createElement("span");
    span.textContent = mensaje;
    span.style.color = "red";
    span.classList.add("error");
    input.parentElement.appendChild(span);
}

function limpiarErrores() {
    const errores = document.querySelectorAll(".error");
    errores.forEach(error => error.remove());
}