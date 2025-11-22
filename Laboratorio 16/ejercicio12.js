const cuadrado = document.getElementById('cuadrado');
const moverBtn = document.getElementById('moverBtn');
const reiniciarBtn = document.getElementById('reiniciarBtn');

moverBtn.addEventListener('click', () => {
    cuadrado.classList.add('mover');
});

reiniciarBtn.addEventListener('click', () => {
    cuadrado.classList.remove('mover');
});