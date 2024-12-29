(function () {
    const questionTitles = document.querySelectorAll('.questions__title');

    questionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const answer = title.nextElementSibling; // El párrafo con la respuesta
            const parent = title.parentElement.parentElement; // El contenedor superior

            // Alternar clases
            parent.classList.toggle('questions__padding--add');
            title.querySelector('.questions__arrow img').classList.toggle('rotate');

            // Ajustar altura dinámica
            if (answer.style.height) {
                answer.style.height = null; // Cerrar
            } else {
                answer.style.height = `${answer.scrollHeight}px`; // Abrir
            }
        });
    });
})();
