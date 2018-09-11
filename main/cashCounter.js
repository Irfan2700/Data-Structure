var readlinesync = require('readline-sync');
var queu = require('../Implementation/queue.js');
var utility = require('../utility/utility.js')

function cashCounter() {


    //var result;
    try{
    var objq = new queu();
    var times = readlinesync.question("Enter how many People Standing in the Queue?? : ");
    if (!(isNaN(times))) {
        for (var i = 1; i <= times; i++) {
            objq.enqueue(i);
        }
    } else {
        console.log("Invalid Entry!!")
        return;
    }

    var c = 1;

    while (!(objq.isEmpty())) {

        console.log(" ");
        console.log(`*********** Person ${c} Enters ************`);
        console.log(" ");

        console.log("Welcome TO FAKE BANK!! ...");
        console.log("Choose What you want to do .. :");
        console.log("1. Deposit Money ...");
        console.log("2. Withdraw Money ...");
        console.log("3. Check Current Balance ... ");

        utility.cashCounter(readlinesync);

        objq.dequeue();
        console.log(" ");
        console.log(`************ ${c} Person Exit *************`);
        console.log(" ");
        //console.log(objq.printList());
        c++;

    }

    if (objq.isEmpty === -1) {
        console.log("THANK YOU 1 !!...");
    } else {
        objq.dequeue();
        // console.log(objq.printList());
        console.log("THANK YOU !!...");
    }
}catch{
    console.log("Something went wrong!!... please try again..");
}
}
cashCounter();