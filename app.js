const button = document.querySelector('.button');
const nav = document.querySelector('.nav');

// Remover la clase "activo" al cargar la página
nav.classList.remove('activo');

button.addEventListener('click', () => {
    nav.classList.toggle('activo');
});
