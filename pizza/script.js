
console.log('hello')

// ------------------------------------------------
// так работает
// let degrees = 0;


// function rotatePizza(speed) {
//   let elem = document.getElementById('bigPizza');
//   elem.style.transform = `rotate(${degrees}deg)`;
//   console.log(77)
//   degrees++
// setTimeout(rotatePizza, 25);
// console.log(speed)
// if (degrees > 359) {
//   degrees = 1;
// console.log(88)
// }
// }
// rotatePizza();

// ------------------------
// хочу сделать функцию, чтоб в неё передадь любую картинку и скорость и запускать по клику например
// но не работает
// let degrees = 0;
// const rotateImg =  document.getElementById('bigPizza');

// function rotatePizza(elem, speed) {
//   elem.style.transform = `rotate(${degrees}deg)`;
//   console.log(77)
//   degrees++
// setTimeout(rotatePizza, speed);
// console.log(speed)
// if (degrees > 359) {
//   degrees = 1;
// console.log(88)
// }
// }
// rotatePizza(rotateImg, 25);



let degrees = 0;
const rotateImg =  document.getElementById('bigPizza');

function rotatePizza(elem) {
  elem.style.transform = `rotate(${degrees}deg)`;
  console.log(77)
  degrees++
  console.log(elem)
console.log(degrees)
// setTimeout(rotatePizza(rotateImg), 25);
console.log(speed)
if (degrees > 359) {
  degrees = 1;
console.log(88)
}
}
rotatePizza(rotateImg);

