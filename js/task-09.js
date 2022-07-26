function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const collorValueEl = document.querySelector('.color');

buttonEl.addEventListener('click', () => {
  const randomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHexColor;
  collorValueEl.textContent = randomHexColor;
})