var readlinesync = require('readline-sync');
var Stack = require('../Implementation/stack');
var utility = require('../utility/utility.js')

function balanceParentisis(){

    console.log(" ");
    var read = readlinesync.question("Enter the Expression here : ");

    console.log(" ");
    console.log("Is your Expression have Balanced Parentheses?? ... ")
    console.log(" ");
    console.log(utility.balanceParentheses(read));

}
balanceParentisis();