const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("btnCambiar");

const textoOriginal = "Texto original";
const textoCambiado = "Texto cambiado";

boton.addEventListener("click", function () {
    if (parrafo.textContent === textoOriginal) {
        parrafo.textContent = textoCambiado;
    } else {
        parrafo.textContent = textoOriginal;
    }
});