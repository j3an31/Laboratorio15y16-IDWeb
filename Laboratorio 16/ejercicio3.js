const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("btnCambiar");

boton.addEventListener("click", function () {
    parrafo.textContent = "Texto cambiado"; 
});