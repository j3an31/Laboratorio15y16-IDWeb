const elementosLi = document.getElementsByTagName("li");

for (let li of elementosLi) {
    li.classList.add("resaltado"); 
    li.classList.remove("oculto");  
}

console.log(document.querySelector(".contenido").innerHTML);