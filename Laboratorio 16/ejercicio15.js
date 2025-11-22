const cadenaJSON = '{"nombre": "José", "edad": 25, "ciudad": "Arequipa"}';
const persona = JSON.parse(cadenaJSON);
document.getElementById("mostrar").textContent = "Nombre: " + persona.nombre;