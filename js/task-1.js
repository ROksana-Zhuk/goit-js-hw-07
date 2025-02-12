//З використанням властивостей і методів DOM-елементів, напиши
// скрипт, який:
//Порахує й виведе в консоль кількість категорій в
//ul#categories,
// тобто елементів li.item.
//Для кожного елемента li.item у списку ul#categories знайде
// й виведе в консоль текст заголовка елемента(тегу < h2 >)
//і кількість елементів у категорії(усіх < li >, вкладених
//у нього).

const categories = document.querySelector('#categories');
///console.log(categories);.

const categoriesAll = categories.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesAll.length}`);

categoriesAll.forEach(category => {
  let title = category.querySelector('.title-categories');
  console.log(`Category: ${title.innerText}`);

  let elements = category.querySelectorAll('.list-categories');
  console.log(`Elements: ${elements.length}`);
});
