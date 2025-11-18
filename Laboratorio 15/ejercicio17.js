const contenedor = document.querySelector("#contenedor1");
const parrafos = contenedor.querySelectorAll("p");

// Convierte NodeList a Array
const arrayParrafos = Array.from(parrafos);

// Ordena alfabéticamente por el texto
arrayParrafos.sort((a, b) => {
    return a.textContent.localeCompare(b.textContent);
});

// Se vuelve a insertar en el DOM en el nuevo orden
arrayParrafos.forEach(p => {
    contenedor.appendChild(p);
});