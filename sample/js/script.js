const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a'); 

function toggleMenu() {
    nav.classList.toggle('open-menu');
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !isExpanded); 

    if (nav.classList.contains('open-menu')) {
        btn.innerHTML = 'Close';
    } else {
        btn.innerHTML = 'Menu';
    }
}

btn.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('open-menu')) {
            toggleMenu();
        }
    });
});