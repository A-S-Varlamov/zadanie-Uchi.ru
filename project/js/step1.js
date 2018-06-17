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