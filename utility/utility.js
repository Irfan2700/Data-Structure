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

module.exports ={

    FileList : function(str,readlinesync){

        var obj = new List();
        var arr = [];
        for(var i=0; i<str.length; i++){

            obj.append(str[i]);
        }
        //var inst;
        //console.log(obj.printList());

        if(isNaN())
        var find = readlinesync.question("Enter the Word you want to Search.. : ");

        if(obj.search(find)){

            obj.removeIndex(obj.indexOf(find)-1);
        }else{
            console.log("Word is not found !! , Now It is added to the List!... : ");
            obj.append(find);
        }
        //console.log(obj.printList());

        return obj;
    },

    orderedFileList : function(str, readlinesync){

            var obj = new ordered();
            var arr = [];
            for(var i=0; i<str.length; i++){
    
                obj.add(str[i]);
            }

            obj.sorting();
            //var inst;
            
    
            
            var find = readlinesync.question("Enter the Word you want to Search.. : ");
    
            if(!(isNaN(find))){
            if(obj.search(find)){
    
                obj.removeIndex(obj.indexOf(find)-1);
            }else{
                console.log("Word is not found !! , Now It is added to the List!... : ");
                obj.add(find);
                obj.sorting();
            }
            //console.log(obj.printList());
        }
            return obj;
    },

    balanceParentheses : function(r){

        var obj = new stacks();
        var s = r.split('');

        for(var i=0; i<s.length-2; i++){

            if(s[i] === '('){
                var a = 1;
                obj.push(a);

            }else if(s[i] === ')'){

                obj.pop();
                console.log(obj.printList());
            }
            }

            if(obj.isEmpty() === -1) return true;
            else return false
        }
    

}