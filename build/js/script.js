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
 
function step1() {
    // скрываем вторую стрелку, второй и третий input
    //GLOBAL.arrow2.style.visibility = 'hidden';
    //GLOBAL.input2.style.visibility = 'hidden';
    GLOBAL.input3.style.visibility = 'hidden';
    
    // сброс инпутов с предыдущей игры
    GLOBAL.input1.style.border = '1px solid #aaa';
    GLOBAL.input1.disabled = false;
    GLOBAL.input1.value = '';
    GLOBAL.input1.focus();
    
    GLOBAL.input2.style.border = '1px solid #aaa';
    GLOBAL.input2.disabled = false;
    GLOBAL.input2.value = '';
    
    GLOBAL.input3.style.border = '1px solid #aaa';
    GLOBAL.input3.disabled = false;
    GLOBAL.input3.value = '';
    //GLOBAL.button.style.display = 'none';
    
    // событие на ввод числа в первый input
    GLOBAL.input1.addEventListener( 'input', function (e) {
      this.value = e.data;
      // если ввели правильное число переходим к шагу 2
      if( this.value == GLOBAL.number[0] ) {
        step2();
      } else {  // если значение не верно красим числа в цвета
        GLOBAL.input1.style.color = 'red';
        GLOBAL.exampleNum1.style.backgroundColor = 'orange';
   
      }
    });
  }
// шаг 2. ввод числа во второй input. 
function step2() {
    // появляются вторая стрелка и второй input
    GLOBAL.arrow2.style.visibility = 'visible';
    GLOBAL.input2.style.visibility = 'visible';
    GLOBAL.input2.focus();
    GLOBAL.exampleNum1.style.backgroundColor = 'white';
    
    // первый input превращается в число
    GLOBAL.input1.style.border = '0';
    GLOBAL.input1.disabled = true;
    GLOBAL.input1.style.color = 'black';
   
    // событие на ввод числа во второй input
    GLOBAL.input2.addEventListener( 'input', function (e) {
      this.value = e.data;
      // если ввели правильное число переходим к шагу 3
      if( this.value == GLOBAL.number[1] ) {
        step3(); 
      } else { // если значение не верно красим числа в цвета
        GLOBAL.input2.style.color = 'red';
        GLOBAL.exampleNum2.style.backgroundColor = 'orange';
      }
    });
  }
// шаг 3. ввод числа в третий input
function step3() {
    // появляется третий input
    GLOBAL.input3.style.visibility = 'visible';
    GLOBAL.input3.focus();
    GLOBAL.exampleNum2.style.backgroundColor = 'white';
    
    // второй input превращается в число 
    GLOBAL.input2.style.border = '0';
    GLOBAL.input2.disabled = true;
    GLOBAL.input2.style.color = 'black';
    
    GLOBAL.input3.addEventListener( 'input', function () {
      if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
      }
      if (this.value.length = 1 ) GLOBAL.input3.style.color = 'black';
      // если ввели правильное число - задача решена
      if( this.value == GLOBAL.number[0] + GLOBAL.number[1] ) {
        GLOBAL.input3.style.color = 'black';
        GLOBAL.input3.style.border = '0';
        GLOBAL.input3.disabled = true;
        GLOBAL.input3.style.color = 'black';
        GLOBAL.button.style.display = 'block';
  
      } else { // если значение не верно красим числа в цвета
        if (this.value.length > 1 ) GLOBAL.input3.style.color = 'red';
      }
    });
  }
// посчитать позицию input1 в зависимости от размера первой стрелки
function calculateInput1Position(){
    var arrow1Width = GLOBAL.arrow1.style.width.replace( 'px', '' );
    var input1Width = GLOBAL.input1.offsetWidth;
    var input1Left = 27 - input1Width / 2 + arrow1Width / 2 ;
    var num0 = GLOBAL.number[0];
    var input1Bottom = -44 + GLOBAL.number[0] * 10;

    GLOBAL.input1.style.left = input1Left + 'px';
    GLOBAL.input1.style.bottom = input1Bottom + 'px';
  }
// посчитать позицию input2 в зависимости от размера второй стрелки
function calculateInput2Position(){ 
    var arrow2Width = GLOBAL.arrow2.style.width.replace( 'px', '' );
    var arrow2Left = GLOBAL.arrow2.style.left.replace( 'px', '' );
    var input2Width = GLOBAL.input2.offsetWidth;
    var input2Position = Number( arrow2Left ) + Number(arrow2Width / 2) - input2Width / 2; 
    var num1 = GLOBAL.number[1];
    var input2Bottom = -45 + GLOBAL.number[1] * 10;       

    GLOBAL.input2.style.left = input2Position + 'px';
    GLOBAL.input2.style.bottom = input2Bottom + 'px';
  }
// взять два случайных числа a и b; a - [6,9], a+b - [11,14]
function getNumber() {
    var num = [];
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
    // a - [6,9]
    num.push( getRandomInt( 6, 9 ) ); 
    // a+b - [11,14]
    num.push( getRandomInt( 11, 14 ) - num[0] ); 
    return num;
  }
// просчитать размеры и положение стрелок
function calculateArrow() {

        var winWidth, arrow1Width, arrow2Left, arrow2Width;

        window.addEventListener("resize", function () {
            winResize();            
        });

  }

  function winResize() {

    var arrow1Style = GLOBAL.arrow1.style;
    var arrow2Style = GLOBAL.arrow2.style;

    winWidth = window.innerWidth;

    // @media запрос. Ширина экрана меньше 701px
    if( winWidth < 701 ) {
        arrow1Width = GLOBAL.number[0] * 14;

        arrow1Style.width = arrow1Width + 'px';
        arrow1Style.left = 17 + 'px';
        arrow1Style.bottom = 57 + 'px';

        arrow2Style.left = 17 + Number(arrow1Width) + 'px';
        arrow2Style.width = GLOBAL.number[1] * 15 + 'px';
        arrow2Style.bottom = 57 + 'px';
    }

    // @media запрос. Ширина экрана больше 700px но меньше 1201px
    if( winWidth > 700 && winWidth < 1201) {
        arrow1Width = GLOBAL.number[0] * 30;

        arrow1Style.width = arrow1Width + 'px';
        arrow1Style.left = 27 + 'px';
        arrow1Style.bottom = 38 + 'px';

        arrow2Style.left = 27 + Number(arrow1Width) + 'px';
        arrow2Style.width = GLOBAL.number[1] * 30 + 'px';
        arrow2Style.bottom = 38 + 'px';
    }

    // @media запрос. Ширина экрана больше 1200px
    if( winWidth > 1200) {
        arrow1Width = GLOBAL.number[0] * 45;

        arrow1Style.width = arrow1Width + 'px';
        arrow1Style.left = 40 + 'px';
        arrow1Style.bottom = 7 + 'px';

        arrow2Style.left = 38 + Number(arrow1Width) + 'px';
        arrow2Style.width = GLOBAL.number[1] * 45 + 'px';
        arrow2Style.bottom = 7 + 'px';
    }
}
// регулировка толщины стрелок
function setStroke() {

    var stroke = { 2: 50, 3: 40, 4: 30, 5: 25, 6: 20, 7: 18, 8: 15, 9: 14 }

   GLOBAL.arrow1.style.strokeWidth = stroke[ GLOBAL.number[0] ];
   GLOBAL.arrow2.style.strokeWidth = stroke[ GLOBAL.number[1] ]; 
 }

// взять элемент по id
function getElemId( str ){
  return document.getElementById( str );
}

function log( str ) {
  console.log( str );
}