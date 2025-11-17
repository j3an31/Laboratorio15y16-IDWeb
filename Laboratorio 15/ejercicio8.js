const colores = ["lightblue", "lightgreen", "lightpink"];
const divs = document.getElementsByTagName("div");

for (let i=0;i<divs.length;i++) {
    divs[i].style.backgroundColor = colores[i%colores.length];
} // El uso de "i%colores.length" sirve para reciclar los colores