const boton = document.getElementById("btnModo");

boton.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");
    if (document.body.classList.contains("oscuro")) {
        boton.textContent = "Desactivar modo oscuro";
    } else {
        boton.textContent = "Activar modo oscuro";
    }
});