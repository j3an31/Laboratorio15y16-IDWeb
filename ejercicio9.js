const miniaturas = document.querySelectorAll(".imagenPeque");
const imagenGrande = document.getElementById("imagenGrande");

miniaturas.forEach(img => {
    img.addEventListener("click", () => {
        imagenGrande.src = img.src; 
    });
});