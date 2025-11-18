const todosLosDivs = document.querySelectorAll("div");
const numeroDeDivs = todosLosDivs.length;

const nuevoP = document.createElement("p");
nuevoP.textContent = `El número de nodos <div> del documento es ${numeroDeDivs}.`;
document.body.appendChild(nuevoP);