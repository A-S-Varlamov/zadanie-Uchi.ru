var GLOBAL = {}; // глобальный объект для переменных
 
// берем элементы из DOM и сохраняем в GLOBAL
GLOBAL.arrow1 = getElemId('arrow1');
GLOBAL.arrow2 = getElemId('arrow2'); 
GLOBAL.input1 = getElemId('input1'); 
GLOBAL.input2 = getElemId('input2');
GLOBAL.input3 = getElemId('input3');
GLOBAL.exampleNum1 = getElemId('exampleNum1');
GLOBAL.exampleNum2 = getElemId('exampleNum2');
GLOBAL.button = getElemId('but');
GLOBAL.image = getElemId('image');

startGame();

function startGame() {
  
  GLOBAL.number = getNumber();    // взять случайные числа 
  // вывести первое число a - [6,9]
  GLOBAL.exampleNum1.innerHTML = GLOBAL.number[0]; 
  // вывести второе число a+b - [11,14]
  GLOBAL.exampleNum2.innerHTML = GLOBAL.number[1]; 

  calculateArrow();               // просчитать размеры и положение стрелок
  setStroke();                    // отрегулировать толщину стрелок
  winResize();
  calculateInput1Position();      // просчитать позицию первого input
  calculateInput2Position();      // просчитать позицию второго input
  

  // шаг 1. ввод числа в первый input
  step1();

}
 
//= step1.js
//= step2.js
//= step3.js
//= calculateInput1Position.js
//= calculateInput2Position.js
//= getNumber.js
//= calculateArrow.js
//= setStroke.js

// взять элемент по id
function getElemId( str ){
  return document.getElementById( str );
}

function log( str ) {
  console.log( str );
}