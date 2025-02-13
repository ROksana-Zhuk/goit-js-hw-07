function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('.input-number');
const buttonCreateEl = document.querySelector('.btn-create');
const buttonDestroyEl = document.querySelector('.btn-destroy');
const boxesDivEl = document.querySelector('#boxes');

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const createDiv = document.createElement('div');
    boxesDivEl.append(createDiv);
    const divColor = getRandomHexColor();
    createDiv.style.backgroundColor = divColor;
    createDiv.style.width = `${size}px`;
    createDiv.style.height = `${size}px`;
    size += 10;
  }
}

const create = () => {
  //const bodyColor = getRandomHexColor();
  if (inputEl.value >= 1 && inputEl.value <= 100) {
    createBoxes(inputEl.value);
  } else {
  }
};
buttonCreateEl.addEventListener('click', create);

const destroy = () => {
  const collectionOfElements = boxesDivEl.querySelectorAll('div');
  collectionOfElements.forEach(element => {
    element.remove();
  });
};
buttonDestroyEl.addEventListener('click', destroy);

//Функція має створювати стільки <div> елементів, скільки вказано
//в параметрі amount.Усі ці < div > мають додаватися за одну
//операцію у DOM дочірніми елементами для div#boxes.

//Розміри першого <div> елемента мають бути 30px на 30px.
//Кожен наступний елемент повинен бути ширшим і вищим від
//попереднього на 10px.
//Усі елементи повинні мати випадковий колір фону.

//Для очищення колекції після натискання на кнопку Destroy
//створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//у такий спосіб видаляючи всі створені елементи.
