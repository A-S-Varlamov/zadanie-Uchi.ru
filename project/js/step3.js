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