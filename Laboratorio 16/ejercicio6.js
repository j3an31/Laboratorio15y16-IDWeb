const btnMas = document.getElementById("btnMas");
const btnMenos = document.getElementById("btnMenos");
const valor = document.getElementById("valor");
const mensaje = document.getElementById("mensaje");

let contador = 0;
btnMas.addEventListener("click", () => {
    contador++;
    valor.textContent = contador;
    mensaje.classList.add("oculto"); 
});

btnMenos.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        valor.textContent = contador;
        mensaje.classList.add("oculto"); 
    } else {
        mensaje.classList.remove("oculto");
    }
});