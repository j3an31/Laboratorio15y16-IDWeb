const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 }
];

const btn = document.getElementById("generar");
const contenedor = document.getElementById("contenedor");

btn.addEventListener("click", () => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    ["Producto", "Precio"].forEach(texto => {
        const th = document.createElement("th");
        th.textContent = texto;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    productos.forEach(p => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${p.nombre}</td><td>S/ ${p.precio}</td>`;
        tbody.appendChild(tr);
    });

    table.append(thead, tbody);
    contenedor.innerHTML = ""; 
    contenedor.appendChild(table);
});