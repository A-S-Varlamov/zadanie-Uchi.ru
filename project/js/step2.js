// шаг 2. ввод числа во второй input. 
function step2() {
    GLOBAL.step = 2;
    // появляются вторая стрелка и второй input, на инпут фокус
    var arrow2 = GLOBAL.arrow2;

    // анимация появления первой стрелки
    arrow2.firstChild.classList.toggle("active");
    arrow2.firstChild.style.visibility = 'visible';

    // появляется тело стрелки
    setTimeout( function () {
        arrow2.firstChild.classList.toggle("active");
        arrow2.lastChild.style.visibility = 'visible';
        arrow2.lastChild.classList.toggle("active");

        // появляется кончик стрелки
        setTimeout( function () {
            arrow2.lastChild.classList.toggle("active");
        }, 600 );

    }, 600 );

    GLOBAL.input2.style.visibility = 'visible';
    GLOBAL.input2.focus();
    GLOBAL.exampleNum1.style.backgroundColor = 'white';
    
    // первый input превращается в число
    GLOBAL.input1.style.border = '0';
    GLOBAL.input1.disabled = true;
    GLOBAL.input1.style.color = 'black';
   
    // событие на ввод числа во второй input
    GLOBAL.input2.addEventListener( 'input', function (e) {
        
        // запрет на нежелательные символы
        if (this.value.length > 1 || e.data == 'e' || e.data == '-'  || e.data == '+') {
            this.value = e.data;
        }
        // если ввели правильное число переходим к шагу 3
        if( this.value == GLOBAL.number[1] ) {
            if (GLOBAL.step == 2) step3(); 

        } else { // если значение не верно красим цифры в цвета
            GLOBAL.input2.style.color = 'red';
            GLOBAL.exampleNum2.style.backgroundColor = 'orange';
        }
    });
}