var readlinesync = require('readline-sync');
var Stack = require('../Implementation/stack');
var utility = require('../utility/utility.js')

function balanceParentisis() {

    console.log(" ");
    try {
        var read = readlinesync.question("Enter the Expression here : ");


        if (isNaN(read)) {
            console.log(" ");
            console.log("Is your Expression have Balanced Parentheses?? ... ")
            console.log(" ");
            console.log(utility.balanceParentheses(read));
        } else {
            console.log("Invalid Input...");
        }
    } catch (e) {
        console.log("Something went wrong!!.. please try again...");
    }
}
balanceParentisis();