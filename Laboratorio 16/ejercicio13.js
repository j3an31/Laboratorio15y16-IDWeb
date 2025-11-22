const form = document.querySelector("#userForm");
const userTable = document.querySelector("#userTable");
let editingRow = null;

// Crear / Actualizar usuario
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const edad = document.querySelector("#edad").value;
    
    if (editingRow) {
        editingRow.querySelector(".name").textContent = nombre;
        editingRow.querySelector(".age").textContent = edad;
        editingRow = null;
    } else {
        addUser(nombre, edad);
    }
    form.reset();
});

// Función para crear una fila nueva (appendChild + dataset)
function addUser(nombre, edad) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="name">${nombre}</td>
        <td class="age">${edad}</td>
        <td>
        <button class="edit-btn" data-action="edit">Editar</button>
        <button class="delete-btn" data-action="delete">Eliminar</button>
        </td>
    `;
    userTable.appendChild(tr);
}

// Delegación de eventos (Editar / Eliminar)
userTable.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    const row = e.target.closest("tr");

    if (action === "delete") {
        row.remove();
    }

    if (action === "edit") {
        const nombre = row.querySelector(".name").textContent;
        const edad = row.querySelector(".age").textContent;
        document.querySelector("#nombre").value = nombre;
        document.querySelector("#edad").value = edad;
        editingRow = row; 
    }
});