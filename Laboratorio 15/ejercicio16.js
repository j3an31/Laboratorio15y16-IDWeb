const primerUl = document.querySelector("ul");
const primerLi = primerUl.firstElementChild;
const ultimoLi = primerUl.lastElementChild;

primerUl.insertBefore(ultimoLi, primerLi);