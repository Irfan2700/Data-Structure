var utility = require('../utility/utility.js');

function anagram(){

    try{
    var a1 = utility.primeCheck();
   var a2 =  utility.anagramPrimeCheck(a1);
   var arr = utility.anagram2D(a2);
   console.log(arr);
    }catch(e)
    {
        console.log("Something went wrong!!...Please try Again!!");
    }
}
anagram();