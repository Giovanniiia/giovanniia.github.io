(function () {
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    // Corregir el nombre del evento
    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        // Corregir la remoción de clase
        sliders[value - add - 1].classList.remove('testimony__body--show');

        // Ajustar el valor si está fuera de rango
        if (value > sliders.length) {
            value = 1;
        } else if (value === 0) {
            value = sliders.length;
        }

        // Corregir la adición de clase
        sliders[value - 1].classList.add('testimony__body--show');
    };
})();
