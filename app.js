const form = document.querySelector('.quiz-form');
const correctAnswers = ['B', 'B', 'B', 'B'];
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    let score = 0;
    userAnswers.forEach((answer, index) => {
        score += (answer === correctAnswers[index] ? 25 : 0);

    });

    scrollTo(0, 0);
    result.classList.remove('d-none');


    let count = 0;
    const timer = setInterval(() => {

        result.querySelector('span').textContent = `${count}%`;

        if (count === score) {
            clearInterval(timer);
        } else {
            count++;
        }
    }, 25);


});