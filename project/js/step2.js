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