// шаг 3. ввод числа в третий input
function step3() {
    
    // появляется третий input, переводим фокус на него
    GLOBAL.input3.style.visibility = 'visible';
    GLOBAL.input3.focus();
    GLOBAL.exampleNum2.style.backgroundColor = 'white';
    
    // второй input превращается в число 
    GLOBAL.input2.style.border = '0';
    GLOBAL.input2.disabled = true;
    GLOBAL.input2.style.color = 'black';
    
    // событие на ввод в инпут
    GLOBAL.input3.addEventListener( 'input', function (e) {

        // запрет на ввод недопустимых символов
        if( e.data == 'e' || e.data == '-' || e.data == '.' || e.data == '+') this.value = '';

        // если ввели больше двух цифр очищаем инпут
        if (this.value.length > 2) {
            this.value = e.data;
            log(e.data)
        }

        // если введена одна цифра цвет текста черный
        if (this.value.length = 1 ) GLOBAL.input3.style.color = 'black';

        // если ввели правильное число - задача решена
        if( this.value == GLOBAL.number[0] + GLOBAL.number[1] ) {
            GLOBAL.input3.style.color = 'black';
            GLOBAL.input3.style.border = '0';
            GLOBAL.input3.disabled = true;
            GLOBAL.input3.style.color = 'black';
            GLOBAL.button.style.visibility = 'visible';
    
        } else { // если ответ не правильный красим текст в красный цвет
            if (this.value.length > 1 ) GLOBAL.input3.style.color = 'red';
        }
    });
}