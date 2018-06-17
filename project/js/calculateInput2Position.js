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