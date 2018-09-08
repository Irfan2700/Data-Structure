var readlinesync = require('readline-sync');
var queu = require('../Implementation/deque.js');
var utility = require('../utility/utility.js')

function palindrom(){

    var read = readlinesync.question("Enter the string : ");

    utility.palindromeCheck(read);
}
palindrom();