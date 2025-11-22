const booksJson = `
    [
    {"Titulo": "Cien años de soledad", "autor": "Gabriel García Márquez"},
    {"Titulo": "Don Quijote de la Mancha", "autor": "Miguel de Cervantes"},
    {"Titulo": "La sombra del viento", "autor": "Carlos Ruiz Zafón"},
    {"Titulo": "Ficciones", "autor": "Jorge Luis Borges"},
    {"Titulo": "El amor en los tiempos del cólera", "autor": "Gabriel García Márquez"}
    ]
    `;

const booksArray = JSON.parse(booksJson);
function renderBooksTable(books) {
    const container = document.getElementById("books-container");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const thTitle = document.createElement("th");
    thTitle.textContent = "Título";
    const thAuthor = document.createElement("th");
    thAuthor.textContent = "Autor";
    headerRow.appendChild(thTitle);
    headerRow.appendChild(thAuthor);
    thead.appendChild(headerRow);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    books.forEach(book => {
        const row = document.createElement("tr");
        const tdTitle = document.createElement("td");
        tdTitle.textContent = book.Titulo;
        const tdAuthor = document.createElement("td");
        tdAuthor.textContent = book.autor;
        row.appendChild(tdTitle);
        row.appendChild(tdAuthor);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.appendChild(table);
}

renderBooksTable(booksArray);