var readlinesync = require('readline-sync');
// var queu = require('../Implementation/deque.js');
var utility = require('../utility/utility.js')

function palindrom() {

    try {
        var read = readlinesync.question("Enter the string : ");
        if (isNaN(read) & !(parseInt(read.length) === 2)) {

            utility.palindromeCheck(read);
        } else {
            console.log("Invalid Input!!..");
        }
    } catch (e) {
        console.log("Something went wrong!!... please try again..")
    }
}
palindrom();