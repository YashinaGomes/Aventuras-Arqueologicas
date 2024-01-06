document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.Hamburguer-menu');
    const nav = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});
