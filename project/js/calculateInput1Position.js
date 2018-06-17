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