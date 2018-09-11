//var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');


function primeNumber() {

    try {
        var prime = utility.primeNumber2D();

        console.log("The 2D Representation of Prime Number : ");
        console.log(prime);
    } catch (e) {
        console.log("Something went wrong!!..please try again..")
    }
}
primeNumber();