var utility = require('../utility/utility.js');

function anagramQueue() {

    try {
        var a1 = utility.primeCheck();
        var a2 = utility.anagramPrimeCheck(a1);
        var arr = utility.anagramQueue(a2);
    } catch (e) {
        console.log("Something went wrong!!...Please try Again!!");
    }
}
anagramQueue();