// посчитать позиции инпутов в зависимости от размера окна браузера
function winResizeInputPosition() { 

    winWidth = window.innerWidth;

    var arrow1Width = GLOBAL.arrow1.style.width.replace( 'px', '' );
    var input1Width = GLOBAL.input1.offsetWidth;
    var num0 = GLOBAL.number[0];

    var arrow2Width = GLOBAL.arrow2.style.width.replace( 'px', '' );
    var arrow2Left = GLOBAL.arrow2.style.left.replace( 'px', '' );
    var input2Width = GLOBAL.input2.offsetWidth;
    var num1 = GLOBAL.number[1];
    var input2Position = Number( arrow2Left ) + Number(arrow2Width / 2) - input2Width / 2; 
    var input2Bottom;

    // @media запрос. Ширина экрана меньше 701px
    if( winWidth < 701 ) {

        var input1Left = 16 - input1Width / 2 + arrow1Width / 2;
        var input1Bottom = 15 + GLOBAL.number[0] * 6;

        input2Bottom = 14 + GLOBAL.number[1] * 6;  
    }

    // @media запрос. Ширина экрана больше 700px но меньше 1201px
    if( winWidth > 700 && winWidth < 1201) {

        var input1Left = 27 - input1Width / 2 + arrow1Width / 2;
        var input1Bottom = -44 + GLOBAL.number[0] * 10;

        input2Bottom = -45 + GLOBAL.number[1] * 10; 
    }

    // @media запрос. Ширина экрана больше 1200px
    if( winWidth > 1200) {

        var input1Left = 40 - input1Width / 2 + arrow1Width / 2;
        var input1Bottom = -115 + GLOBAL.number[0] * 15;

        input2Bottom = -117 + GLOBAL.number[1] * 15; 
    }

    GLOBAL.input1.style.left = input1Left + 'px';
    GLOBAL.input1.style.bottom = input1Bottom + 'px';

    GLOBAL.input2.style.left = input2Position + 'px';
    GLOBAL.input2.style.bottom = input2Bottom + 'px';
}
