// посчитать размеры стрелок в зависимости от размера окна браузера
function winResizeArrow() {

    var arrow1Style = GLOBAL.arrow1.style;
    var arrow2Style = GLOBAL.arrow2.style;

    // ширина окна браузера
    winWidth = window.innerWidth;

    // @media запрос. Ширина экрана меньше 701px
    if( winWidth < 701 ) {
        arrow1Width = GLOBAL.number[0] * 18;

        // размеры и положение первой стрелки
        arrow1Style.width = arrow1Width + 'px';
        arrow1Style.left = 16 + 'px';
        arrow1Style.bottom = 63 + 'px';

        // размеры и положение второй стрелки
        arrow2Style.left = 15 + Number(arrow1Width) + 'px';
        arrow2Style.width = GLOBAL.number[1] * 18 + 'px';
        arrow2Style.bottom = 63 + 'px';
    }

    // @media запрос. Ширина экрана больше 700px но меньше 1201px
    if( winWidth > 700 && winWidth < 1201) {
        arrow1Width = GLOBAL.number[0] * 30;

        // размеры и положение первой стрелки
        arrow1Style.width = arrow1Width + 'px';
        arrow1Style.left = 27 + 'px';
        arrow1Style.bottom = 38 + 'px';

        // размеры и положение второй стрелки
        arrow2Style.left = 27 + Number(arrow1Width) + 'px';
        arrow2Style.width = GLOBAL.number[1] * 30 + 'px';
        arrow2Style.bottom = 38 + 'px';
    }

    // @media запрос. Ширина экрана больше 1200px
    if( winWidth > 1200) {
        arrow1Width = GLOBAL.number[0] * 45;

        // размеры и положение первой стрелки
        arrow1Style.width = arrow1Width + 'px';
        arrow1Style.left = 40 + 'px';
        arrow1Style.bottom = 7 + 'px';

        // размеры и положение второй стрелки
        arrow2Style.left = 38 + Number(arrow1Width) + 'px';
        arrow2Style.width = GLOBAL.number[1] * 45 + 'px';
        arrow2Style.bottom = 7 + 'px';
    }
}