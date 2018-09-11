var utility = require('../utility/utility.js');

function anagramStack() {

    try {
        var a1 = utility.primeCheck();
        var a2 = utility.anagramPrimeCheck(a1);
        var arr = utility.anagramStack(a2);
    } catch (e) {
        console.log("Something went wrong!!...Please try Again!!");
    }
}
anagramStack();