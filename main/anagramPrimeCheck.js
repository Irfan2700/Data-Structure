var utility = require('../utility/utility.js');

function anagram(){

    var a1 = utility.primeCheck();
   var a2 =  utility.anagramPrimeCheck(a1);
   var arr = utility.anagram2D(a2);
   console.log(arr);
}
anagram();