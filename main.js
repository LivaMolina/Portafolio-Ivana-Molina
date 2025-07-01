function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

const menuLinks = document.querySelectorAll('nav ul li a');

function setActiveLink(link) {
    menuLinks.forEach(el => el.classList.remove('active'));
    link.classList.add('active');
}

// Marcar "Inicio" por defecto al cargar
window.addEventListener('DOMContentLoaded', () => {
    const current = document.querySelector('nav ul li a[href="#inicio"]');
    if (current) current.classList.add('active');
});

// Activar cambio de clase al hacer clic
menuLinks.forEach(link => {
    link.addEventListener('click', () => setActiveLink(link));
});