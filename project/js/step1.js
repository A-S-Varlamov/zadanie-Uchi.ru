function step1() {
    // скрываем вторую стрелку, второй и третий input
    GLOBAL.arrow2.firstChild.style.visibility = 'hidden';
    GLOBAL.arrow2.lastChild.style.visibility = 'hidden';

    GLOBAL.input2.style.visibility = 'hidden';
    GLOBAL.input3.style.visibility = 'hidden';
    
    // сброс инпутов с предыдущей игры. Фокус на первый инпут
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
    GLOBAL.button.style.visibility = 'hidden';

    GLOBAL.arrow1.lastChild.style.visibility = 'hidden';
    GLOBAL.arrow1.firstChild.classList.toggle("active");

    setTimeout( function () {
        GLOBAL.arrow1.firstChild.classList.toggle("active");
        GLOBAL.arrow1.lastChild.style.visibility = 'visible';
        GLOBAL.arrow1.lastChild.classList.toggle("active");
        setTimeout( function () {
            GLOBAL.arrow1.lastChild.classList.toggle("active");
        }, 600 );
    }, 600 );
    
    // событие на ввод числа в первый input
    GLOBAL.input1.addEventListener( 'input', function (e) {
        var str = '';
        if( e.data ) this.value = e.data;
        log(e)

        if( this.value ) {
            str = this.value;
            str = str.slice(0,1);
            log(typeof str);
        }
        

        // если ввели правильное число переходим к шагу 2
        if( this.value == GLOBAL.number[0] ) {
            step2();

        } else {  // если значение не верно красим числа в цвета
            GLOBAL.input1.style.color = 'red';
            GLOBAL.exampleNum1.style.backgroundColor = 'orange';
    
        }
    });
}