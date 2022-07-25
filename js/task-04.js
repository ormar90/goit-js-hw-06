const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    return counter.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    return counter.textContent = counterValue;
};


buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);