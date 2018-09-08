/**DEPENDENCIES & PACKAGES - Expect the nodejs, npm, vargs, readline, readline-sync, lodash to be installed
 */

/*********************************************************************************************************************
 *  Execution       :   1. default node         cmd> node utility.js 
 *                      2. if nodemon installed cmd> nodemon utility.js
 * 
 *  Purpose         : Logic for all functional programs.
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

        var obj = new List();
        var arr = [];
        for (var i = 0; i < str.length; i++) {

            obj.append(str[i]);
        }
        //var inst;
        //console.log(obj.printList());

        if (isNaN())
            var find = readlinesync.question("Enter the Word you want to Search.. : ");

        if (obj.search(find)) {

            obj.removeIndex(obj.indexOf(find) - 1);
        } else {
            console.log("Word is not found !! , Now It is added to the List!... : ");
            obj.append(find);
        }
        //console.log(obj.printList());

        return obj;
    },

    orderedFileList: function (str, readlinesync) {

        var obj = new ordered();
        var arr = [];
        for (var i = 0; i < str.length; i++) {

            obj.add(str[i]);
        }

        obj.sorting();
        //var inst;



        var find = readlinesync.question("Enter the Word you want to Search.. : ");

        if (!(isNaN(find))) {
            if (obj.search(find)) {

                obj.removeIndex(obj.indexOf(find) - 1);
            } else {
                console.log("Word is not found !! , Now It is added to the List!... : ");
                obj.add(find);
                obj.sorting();
            }
            //console.log(obj.printList());
        }
        return obj;
    },

    balanceParentheses: function (r) {

        var objstak = new stacks();
        var s = r.split('');
        var count1 = 0;
        var count2 = 0;

        for (var i = 0; i < s.length; i++) {

            if (s[i] === '(') {

                objstak.push(s[i]);
                count1++;

            } else if (s[i] === ')') {

                // if (objstak.isEmpty === 1) {
                objstak.pop();
                count2++;

                // }else{break;}
            }
        }

        if (count1 === count2) return true;
        else return false
    },

    depositCash: function (amount) {

        objque.enqueue(amount);
        objque.balance += parseInt(amount);
        console.log("Cash Deposit Successfully!! .... ");

        return objque.balance;
    },

    withdrawCash: function (amount) {

        if (objque.balance >= amount) {
            objque.dequeue(amount);
            objque.balance -= parseInt(amount);
            console.log("Cash Withdraw Successfully!! .... ");
        } else {
            console.log("Insufficient Balance !!! .....");
            console.log(" ");
        }

        return objque.balance;
    },

    balanceWatch: function () {

        return objque.balance;
    },

    cashCounter: function (readlinesync) {

        var option = readlinesync.question("Enter  1, 2 or 3 ... : ");
        console.log(" ");

        var amount;


        switch (parseInt(option)) {

            case 1:
                {
                    amount = readlinesync.question("Enter the Amount you want to Deposit : ");
                    console.log(" ");
                    var result = this.depositCash(amount);
                    console.log(" ");
                    console.log("The Current Balance is : " + result);
                    console.log(" ");
                    break;
                }

            case 2:
                {
                    amount = readlinesync.question("Enter the Amount you want to Withdraw : ");
                    console.log(" ");
                    var result = this.withdrawCash(amount);
                    console.log(" ");
                    console.log("The Current Balance is : " + result);
                    console.log(" ");
                    break;
                }

            case 3:
                {
                    console.log("The current balance : " + this.balanceWatch());
                    console.log(" ");
                    break;
                }

            default:
                {
                    console.log("Invalid Option Selection... transection Terminating...");
                    console.log("Please Come later....");
                }
        }
    },

    palindromeCheck: function (string) {

        if(isNaN(string)){
        var objdeq = new deque();

        var str = string.split('');
        var flag = true;
        for (var i = 0; i < str.length; i++) {

            objdeq.addRear(str[i]);
        }

            while(objdeq.size()>2){
             if(objdeq.size() == 1){
                 break;

             }   

             var a = objdeq.removeFront();
             var b = objdeq.removeRear();
             if(a == b){
                 flag = true;
             }else{
                 flag = false;
                 break;
             }
    }
    if(flag === true){
        console.log("It is a Pallindrom!! ....");

    }else{console.log("Not a pallindrom!! ....")}
}else {
    console.log("Invalid Input!! ");
}
    }
}