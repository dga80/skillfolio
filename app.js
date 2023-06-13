const button = document.querySelector('.header .button');
const nav = document.querySelector('.header .nav');

nav.classList.remove('activo');

button.addEventListener('click', () => {
  nav.classList.toggle('activo');
});

const links = nav.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

    const target = link.getAttribute('href'); // Obtener el destino del enlace

    // Cerrar el menú
    nav.classList.remove('activo');

    // Desplazarse suavemente al destino del enlace después de un breve retraso
    setTimeout(() => {
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Alinea la parte superior del elemento al inicio de la ventana
      });
    }, 300); // Ajusta el valor del retraso si es necesario
  });
});

function adjustMenuPosition() {
  const buttonRect = button.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const topOffset = buttonRect.top + scrollTop;
  nav.style.transform = `translateY(${topOffset}px)`;
}

window.addEventListener('resize', adjustMenuPosition);
window.addEventListener('scroll', adjustMenuPosition);

// Ajustar la posición del menú al cargar la página
adjustMenuPosition();

// Verificar la ubicación actual y resaltar el enlace correspondiente
function highlightCurrentLink() {
  const currentSection = document.querySelector('.section.current');
  const currentLinkId = currentSection.getAttribute('id');
  const currentLink = nav.querySelector(`a[href="#${currentLinkId}"]`);

  links.forEach((link) => {
    link.classList.remove('active');
  });

  currentLink.classList.add('active');
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const threshold = window.innerHeight * 0.5;

    if (rect.top < threshold && rect.bottom > threshold) {
      section.classList.add('current');
    } else {
      section.classList.remove('current');
    }
  });

  highlightCurrentLink();
});

// Ajustar la posición del menú al cambiar el tamaño de la ventana
window.addEventListener('resize', highlightCurrentLink);
