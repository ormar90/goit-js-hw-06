
const categoriesItemEl = document.querySelectorAll('.item');


console.log('Number of categories: ', categoriesItemEl.length);

categoriesItemEl.forEach(element => {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Element: ', element.lastElementChild.querySelectorAll('li').length);
});