(() => {
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
})();