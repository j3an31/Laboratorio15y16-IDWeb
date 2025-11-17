const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Elemento insertado con JS.";

const miDiv = document.querySelector("div");
const primerHijo = miDiv.firstElementChild;
miDiv.insertBefore(nuevoParrafo, primerHijo);