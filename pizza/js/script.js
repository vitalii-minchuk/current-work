
const startRotate = document.getElementById('arrRight');
const stopRotate = document.getElementById('arrLeft');
const rotateImg = document.getElementById('bigPizza');
let degrees = 0;

function rotatePizza(elem, speed) {
  elem.style.transform = `rotate(${degrees}deg)`;
  console.log(77)
  degrees++
  
  console.log(speed)
  if (degrees < 3600) {
    setTimeout(() => rotatePizza(elem, speed), speed)
    console.log(88)
  }
}

startRotate.addEventListener('click', () => {
  degrees = 0;
  rotatePizza(rotateImg, 40);
});

stopRotate.addEventListener('click', () => {
  degrees = 3599;
});

const colorBtn = document.querySelector('.header__tag-btn');
const logo = document.querySelector('.header__logo-img');
const before = document.querySelector('.slider-top__title-text');
const BGimg = document.querySelector('.header__wrapper');
const tag = document.querySelector('.header__tag');
const inputBtnBG = document.querySelector('.header__search-btn');
const tagBtnColor = document.querySelector('.header__tag-btn');

colorBtn.addEventListener('click', () => {
  logo.classList.toggle('change-color');
  before.classList.toggle('changeBG-color');
  BGimg.classList.toggle('changeBGimg');
  tag.classList.toggle('change-tag-color');
  inputBtnBG.classList.toggle('change-input-color');
  tagBtnColor.classList.toggle('change-tag-btn-color');
})

