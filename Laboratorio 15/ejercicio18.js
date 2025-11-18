const secciones = document.querySelectorAll("section");

secciones.forEach((seccion, index) => {
  seccion.setAttribute("data-index", index);
});