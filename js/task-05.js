const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onInputChange)

function onInputChange() {
    if (nameInputEl.value === '') {
        nameOutputEl.textContent = 'Anonymous';
    } else {
        nameOutputEl.textContent = nameInputEl.value;
        nameOutputEl.textContent = nameOutputEl.textContent[0].toUpperCase() + nameOutputEl.textContent.slice(1);
    }
}