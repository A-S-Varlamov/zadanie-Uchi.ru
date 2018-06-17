// регулировка толщины стрелок
function setStroke() {

    var stroke = { 2: 50, 3: 40, 4: 30, 5: 25, 6: 20, 7: 18, 8: 15, 9: 14 }

   GLOBAL.arrow1.style.strokeWidth = stroke[ GLOBAL.number[0] ];
   GLOBAL.arrow2.style.strokeWidth = stroke[ GLOBAL.number[1] ]; 
 }