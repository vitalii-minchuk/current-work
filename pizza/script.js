
console.log('hello')

let degrees = 0;


function rotatePizza(speed) {
  let elem = document.getElementById('bigPizza');
  elem.style.transform = `rotate(${degrees}deg)`;
  console.log(77)
  degrees++
setTimeout(rotatePizza, 25);
console.log(speed)
if (degrees > 359) {
  degrees = 1;
console.log(88)
}
}
rotatePizza();

