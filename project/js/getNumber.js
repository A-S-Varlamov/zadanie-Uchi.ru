// взять два случайных числа a и b; a - [6,9], a+b - [11,14]
function getNumber() {
    var num = [];
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
    // a - [6,9]
    num.push( getRandomInt( 6, 9 ) ); 
    // a+b - [11,14]
    num.push( getRandomInt( 11, 14 ) - num[0] ); 
    return num;
  }