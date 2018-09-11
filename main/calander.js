var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');
var queue = require('../Implementation/queue.js');

function calender() {

    try{
    var date = readlinesync.question("Enter the Months and Year for Calender in YYYY/MM format : ")
    var d = date.split('/');
    if (parseInt(d[0].length) === 4 & (!(isNaN(parseInt(d[0])))) & (!(isNaN(parseInt(d[1])))) & (parseInt(d[1]) <= 12))
        utility.calender(date);
    else console.log("Invalid Input Format!!...It should be in YYYY/MM format...");
    }catch(e){
        console.log("Something went wrong!!...please try again!!");
    }
}
calender();