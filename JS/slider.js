
// Fn anonima autoejecutada que se encarga del slider
(() => {

    const sliders = [...document.querySelectorAll('.testimony__body')];
    const btnNext = document.querySelector('#next');
    const btnBefore = document.querySelector('#before');
    let value;

    btnNext.addEventListener('click', () => {
        changePosition(1);
    });

    btnBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentSlider = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentSlider);
        value+= add;

        sliders[Number(currentSlider)-1].classList.remove('testimony__body--show');

        if (value === sliders.length+1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('testimony__body--show');
    };

})();