(function() {
    const openButton = document.querySelector('.nav__menu'); // Botón para abrir el menú
    const menu = document.querySelector('.nav__link--menu'); // El menú desplegable
    const closeMenu = document.querySelector('.nav__close'); // Botón para cerrar el menú

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show'); // Muestra el menú
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show'); // Oculta el menú
    });
})();
