var utility = require('../utility/utility.js');

function anagramQueue(){

    var a1 = utility.primeCheck();
   var a2 =  utility.anagramPrimeCheck(a1);
   var arr = utility.anagramQueue(a2);
}
anagramQueue();