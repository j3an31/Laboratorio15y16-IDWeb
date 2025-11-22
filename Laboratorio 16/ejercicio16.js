document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { nombre: 'Manzana', precio: 1 },
        { nombre: 'Pan', precio: 1.5 },
        { nombre: 'Leche', precio: 3 },
        { nombre: 'Huevos', precio: 2 }
    ];

    const productosJSON = JSON.stringify(productos);
    console.log('Productos en JSON:', productosJSON);
    const productosRecuperados = JSON.parse(productosJSON);
    console.log('Productos recuperados:', productosRecuperados);

    const contenedor = document.getElementById('productos-container');
    const ul = document.createElement('ul');

    productosRecuperados.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = producto.nombre;
        ul.appendChild(li);
    });
    contenedor.appendChild(ul);
});