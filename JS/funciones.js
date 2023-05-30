// fn Menu
export function menu(){
    const openBtn = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    // const closeMenu = document.querySelectorAll('ul.nav__links, nav__close');

    openBtn.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });
};

// fn questions
export function questions() {
    const questions = [...document.querySelectorAll('.questions__title')];


    questions.forEach(question => {
        question.addEventListener('click', () => {
            let height = 0;
            // esto se trae el hermano del elemento HTML para este caso el <p></p> que viene despues del <h3></h3>
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if (answer.clientHeight ===0 ) {
                height = answer.scrollHeight;

            }

            answer.style.height = `${height}px`;
        });
    });
};

// fn slider
export function slider(){

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

};

// fx limpiar campo email
export function limpiar() {
    document.addEventListener('DOMContentLoaded', function(){
        let formulario = document.getElementById('form1');
        formulario.addEventListener('submit', function() {
          setTimeout(function(){ 
              formulario.reset();
          },100 );
        });
    });
};