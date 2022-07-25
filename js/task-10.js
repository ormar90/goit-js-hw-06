function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector('#boxes');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const input = document.querySelector('[type="number"]')

function createBoxes(amount) {
  const createElement = [];
  let sizeValue = 30;

  for (let i = 0; i < amount; i += 1){
    createElement.push(document.createElement('div'));
    createElement[i].style.backgroundColor = getRandomHexColor();
  } 

  createElement.forEach(element => {
    console.log();
    sizeValue += 10
    element.style.width = `${sizeValue}px`;
    element.style.height = `${sizeValue}px`;
  });

boxesEl.append(...createElement);
}

function destroyBoxes() {
    boxesEl.innerHTML = '';
}

let inputValue;
input.addEventListener('input', () => {
  
  inputValue = input.value;
  // console.log(inputValue);
  return inputValue
});

  create.addEventListener('click', createBoxes(inputValue));
  destroy.addEventListener('click', destroyBoxes);


console.log(inputValue);

