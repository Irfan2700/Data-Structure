/**DEPENDENCIES & PACKAGES - Expect the nodejs, npm, vargs, readline, readline-sync, lodash to be installed
 */

/*********************************************************************************************************************
 *  Execution       :   1. default node         cmd> node utility.js 
 *                      2. if nodemon installed cmd> nodemon utility.js
 * 
 *  Purpose         : Logic for all Data structure programs.
 * 
 *  @description    : This file contains all the logic for many different programs and all logic is converted to public 
 *                    (export) as its can be accessed.
 * 
 *  @file           : utility.js
 *  @overview       : utility module which contains logic of all algorithms codes.
 *  @module         : utility - This is optional if expeclictly its an npm or local package
 *  @author         : Irfan2700 <https://github.com/Irfan2700>
 *  @version        : 1.0
 *  @since          : 05-08-2018
 *
 **********************************************************************************************************************
 **********************************************************************************************************************/

var List = require('../Implementation/UnorderedLinkedList.js');
var ordered = require('../Implementation/OrderedLinkedList.js');
var stacks = require('../Implementation/stack.js');
var queue = require('../Implementation/queue.js');
var deque = require('../Implementation/deque.js');

var objque = new queue();

module.exports = {

    FileList: function (str, readlinesync) {

        /**
         * @description : Reading the Text from a file, split it into words and arrange it as Linked List. Take a user input
         *                to search a Word in the List. If the Word is not found then add it to the list, and if it found
         *                then remove the word from the List. In the end save the list into a file.
         * @param {string} str is string that contains the word sentence that read from the file.
         * @param {object} readlinesync is the readlinesync is the readline-sync object for take user input.
         */

        var obj = new List();               //creating the object of LinkedList class
        var arr = [];
        for (var i = 0; i < str.length; i++) {

            obj.append(str[i]);             //adding the element into the List
        }
        
        //console.log(obj.printList());


        var find = readlinesync.question("Enter the Word you want to Search.. : ");     
        if (isNaN(find)) {                  //validation condition

            if (obj.search(find)) {         //searching the string using linked list search function

                obj.removeIndex(obj.indexOf(find) - 1);     //removing the word that are get found
            } else {
                console.log("Word is not found !! , Now It is added to the List!... : ");
                obj.append(find);           //adding the word is it is not found in the list
            }
            //console.log(obj.printList());
        } else {
            console.log("Invalid String value!! ... ");     //validation
        }
        return obj;
    },

    orderedFileList: function (str, readlinesync) {

        /**
         * @description : Read a List of Numbers from a file and arrange it ascending Order in a Linked List.
         *                Take user input for a number, if found then pop the number out of the list else insert
         *                the number in appropriate position.
         * @param {string} str is string that contains the Numbers that read from the file.
         * @param {object} readlinesync is the readlinesync is the readline-sync object for take user input.
         */

        var obj = new ordered();            //creating a ordered Linked List object
        var arr = [];
        for (var i = 0; i < str.length; i++) {

            obj.add(str[i]);               //add the each Number in the string into the List
        }

        obj.sorting();                  //Linked list Sorting function to get the ordered List
        //var inst;


        
        var find = readlinesync.question("Enter the Number you want to Search.. : ");  //user input

        if(!(isNaN(find))){                         //validation
        if (!(isNaN(find))) {
            if (obj.search(find)) {                 //searching the Number in the List

                obj.removeIndex(obj.indexOf(find) - 1);     // remove the Number if Found
            } else {
                console.log("Number is not found !! , Now It is added to the List!... : ");
                obj.add(find);                              //adding the Number if it is not found in the List
                obj.sorting();                              //sorting
            }
            //console.log(obj.printList());
        }
    }else{
        console.log("Invalid Input!!..");
    }
        return obj;
    },

    balanceParentheses: function (r) {

        /**
         * @description : Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses
         *                 are used to order the performance of operations. Ensure parentheses must appear in a balanced fashion.
         * @param {string} r is the string that is the Expression containg the parentheses
         */

        var objstak = new stacks();  //creating the object of the Stack class
        var s = r.split('');        //spliting the string into array
        var count1 = 0;
        var count2 = 0;

        for (var i = 0; i < s.length; i++) {

            if (s[i] === '(') {     //checking condition

                objstak.push(s[i]);     //push element in the stack
                count1++;

            } else if (s[i] === ')') { 

                
                objstak.pop();      //pop element from the stack
                count2++;

                // }else{break;}
            }
        }

        if (count1 === count2) return true;     //check condition
        else return false
    },

    depositCash: function (amount) {

        /**
         * @description : To deposit the Money using Queue
         * @param {Number} amount the amount need to deposit into bank
         */

        objque.enqueue(amount);             //adding the amount in the queue
        objque.balance += parseInt(amount);     //updating the current balance
        console.log("Cash Deposit Successfully!! .... ");

        return objque.balance;
    },

    withdrawCash: function (amount) {

        /**
         * @description : To withdraw the Money using Queue
         * @param {Number} amount is the amount need to be withdraw from bank
         */

        if (objque.balance >= amount) {         //checking for amount limit
            objque.dequeue(amount);             //remove the require amount from queue
            objque.balance -= parseInt(amount); //updating the balance
            console.log("Cash Withdraw Successfully!! .... ");
        } else {
            console.log("Insufficient Balance !!! .....");
            console.log(" ");
        }

        return objque.balance;
    },

    balanceWatch: function () {

        return objque.balance;  //returns the current balance
    },

    cashCounter: function (readlinesync) {

        /**
         * @description : Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash.
         *                Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people.
         *                Maintain the Cash Balance.
         * @param {object} readlinesync is the readlinesync is the readline-sync object for take user input. 
         */

        var option = readlinesync.question("Enter  1, 2 or 3 ... : ");      //user input
        if (!(isNaN(option))) {                         //validation condition
            console.log(" ");

            var amount;


            switch (parseInt(option)) {             //switch case

                case 1:
                    {
                        amount = readlinesync.question("Enter the Amount you want to Deposit : ");  //user input
                        console.log(" ");
                        var result = this.depositCash(amount);          //calling depositCash function
                        console.log(" ");
                        console.log("The Current Balance is : " + result); //printing current Balance
                        console.log(" ");
                        break;
                    }

                case 2:
                    {
                        console.log("Intial Balance : " + objque.balance)       //Printing Inital balance
                        console.log(" ");
                        amount = readlinesync.question("Enter the Amount you want to Withdraw : "); //user input
                        console.log(" ");
                        var result = this.withdrawCash(amount);     //calling withdrawCash function
                        console.log(" ");
                        console.log("The Current Balance is : " + result); //printing the cuurent balance
                        console.log(" ");
                        break;
                    }

                case 3:
                    {
                        console.log("The current balance : " + this.balanceWatch());    //current balance
                        console.log(" ");
                        break;
                    }

                default:
                    {
                        console.log("Invalid Option Selection... transection Terminating...");
                        console.log("Please Come later....");
                    }
            }
        } else {
            console.log("Invalid option Entry!!...")
        }
    },

    palindromeCheck: function (string) {

        /**
         * @description : A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam.
         *               We would like to construct an algorithm to input a string of characters and check whether it is a palindrome.
         * @param {string} string is the user input string
         */

        if (isNaN(string)) {        //validation condition
            var objdeq = new deque();       //creating the object of the deque

            var str = string.split('');     //spliting the string into the array
            var flag = true;
            for (var i = 0; i < str.length; i++) {

                objdeq.addRear(str[i]);     //adding the element from rear end of the deque
            }

            while (objdeq.size() > 2) {     
                if (objdeq.size() == 1) {
                    break;

                }

                var a = objdeq.removeFront();     //removing element from both ends of the deque
                var b = objdeq.removeRear();      //and stores into two variables
                if (a == b) {               //checking condition
                    flag = true;
                } else {
                    flag = false;
                    break;
                }
            }
            if (flag === true) {
                console.log("It is a Pallindrom!! ....");

            } else {
                console.log("Not a pallindrom!! ....")
            }
        } else {
            console.log("Invalid Input!! ");
        }
    },

    calender: function (dat) {

        /**
         * @description : To display a calender by taking the year and month as user input
         * @param {string} dat is the year and month in YYYY/MM form
         */

        var arr = dat.split('/');       //spliting the string into array
        var dat = dat + "/1";           //concadination

        var objd = new Date(dat);       //using Date function
        var nOfDays = new Date(objd.getFullYear(), objd.getMonth() + 1, 0).getDate();   //returns the Number of days in the months
        var weekday = objd.getDay();
        console.log(" ");
        console.log("***************************************************");
        switch (parseInt(arr[1])) {         //for displaying the months

            case 1:
                console.log("                  January" + ", " + arr[0]);
                break;

            case 2:
                console.log("                  February" + ", " + arr[0]);
                break;

            case 3:
                console.log("                  March" + ", " + arr[0]);
                break;

            case 4:
                console.log("                  April" + ", " + arr[0]);
                break;

            case 5:
                console.log("                  May" + ", " + arr[0]);
                break;

            case 6:
                console.log("                  June" + ", " + arr[0]);
                break;

            case 7:
                console.log("                  July" + ", " + arr[0]);
                break;

            case 8:
                console.log("                  August" + ", " + arr[0]);
                break;

            case 9:
                console.log("                  September" + ", " + arr[0]);
                break;

            case 10:
                console.log("                  October" + ", " + arr[0]);
                break;

            case 11:
                console.log("                  November" + ", " + arr[0]);
                break;

            case 12:
                console.log("                  December" + ", " + arr[0]);
                break;

            default:
                console.log(" ");
        }


        this.calenderPrint(weekday, nOfDays); //calling the calenderPrint function

    },

    calenderPrint: function (weekday, nOfDays) {

        /**
         * @description : to print the calender in a standard format
         * @param {Number} weekday is the any number from 0 to 6 which is tell about the Day of week
         * @param {Number} nOfDays is the Number of Days in that month
         */

        var a1 = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; //array have the week of day as elements
        var a2 = [];
        var a3 = [];

        var n = 1;
        //  console.log(nOfDays)

        for (var i = 0; i < 7; i++) {

            if (i < weekday) {

                a2.push(' ');
            } else {
                //  console.log("sds")
                a2.push(n);
                n++;
            }

        }

        for (var i = n; i <= 42; i++, n++) {

            if (n <= nOfDays) {

                a3.push(n);

            } else {
                a3.push(' ');
            }
        }

        // if (a3[28] === null) {
        //     for (var i = 0; i < 7; i++) {
        //         a3.push(' ');
        //     }
        // }


        console.log('\n' +
            '***************************************************' + '\n' +
            ' ' + a1[0] + "\t" + a1[1] + "\t" + a1[2] + "\t" + a1[3] + "\t" + a1[4] + "\t" + a1[5] + "\t" + a1[6] + ' ' + '\n' + '\n' +
            ' ' + a2[0] + "\t" + a2[1] + "\t" + a2[2] + "\t" + a2[3] + "\t" + a2[4] + "\t" + a2[5] + "\t" + a2[6] + '  ' + '\n' +
            ' ' + a3[0] + "\t" + a3[1] + "\t" + a3[2] + "\t" + a3[3] + "\t" + a3[4] + "\t" + a3[5] + "\t" + a3[6] + '  ' + '\n' +
            ' ' + a3[7] + "\t" + a3[8] + "\t" + a3[9] + "\t" + a3[10] + "\t" + a3[11] + "\t" + a3[12] + "\t" + a3[13] + '  ' + '\n' +
            ' ' + a3[14] + "\t" + a3[15] + "\t" + a3[16] + "\t" + a3[17] + "\t" + a3[18] + "\t" + a3[19] + "\t" + a3[20] + '  ' + '\n' +
            ' ' + a3[21] + "\t" + a3[22] + "\t" + a3[23] + "\t" + a3[24] + "\t" + a3[25] + "\t" + a3[26] + "\t" + a3[27] + ' ' + '\n' +
            ' ' + a3[28] + "\t" + a3[29] + "\t" + a3[30] + "\t" + a3[31] + "\t" + a3[32] + "\t" + a3[33] + "\t" + a3[34] + '  ' + '\n');


    },

    primeNumber2D: function () {


        var a = [];

        var n = 0;
        while (n < 1000) {
            var arr = [];
            for (var j = n; j < 100 + n; j++) {

                var flag = false;
                for (var k = 2; k <= j / 2; k++) {

                    if (j % k === 0) {
                        flag = true;
                    }

                }
                if (flag === false) { //console.log(i);
                    arr.push(j);
                }
            }
            a.push(arr);
            n += 100;
        }
        return a;
    },

    primeCheck: function () {

        var arr = [];
        for (var j = 0; j < 1000; j++) {

            var flag = false;
            for (var k = 2; k <= j / 2; k++) {

                if (j % k === 0) {
                    flag = true;
                }

            }
            if (flag === false) { //console.log(i);
                arr.push(j);
            }
        }
        return arr;

    },

    anagramPrimeCheck: function (arr) {


        var a1 = [];

        for (var i = 0; i <= arr.length - 1; i++) { //nested for loop
            for (var j = i + 1; j <= arr.length; j++) { //i+1 to avoid the avoid comparision with number it self
                var s1 = '' + parseInt(arr[i]); //converting each element into string  
                var s2 = '' + parseInt(arr[j]);
                if ((((s1.split('')).sort()).join()) === (((s2.split('')).sort()).join())) { //check for anagram

                    // arr1.push(parseInt(s1)); 
                    a1.push(parseInt(s1));
                    a1.push(parseInt(s2)); //pushing all anagram element into an array
                }


            }
        }
        return a1;

    },

    anagram2D: function (a1) {

        var a2 = this.primeCheck();
        var array = [];

        for (var i = 0; i < a2.length; i++) {
            for (var j = 0; j < a1.length; j++) {

                if (a2[i] === a1[j]) {

                    a2.splice(i, 1);
                }
            }
        }
        array.push(a1);
        array.push(a2);

        return array;


    },

    anagramStack: function (a1) {

        var objstack = new stacks();

        for (var i = 0; i < a1.length; i++) {

            objstack.push(a1[i]);
        }

        console.log(objstack.printList());
    },

    anagramQueue: function (a1) {

        var objque = new queue();

        for (var i = 0; i < a1.length; i++) {

            objque.enqueue(a1[i]);
        }

        console.log(objque.printList());
    }

}