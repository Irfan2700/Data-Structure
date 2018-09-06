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

var List = require('../LinkedList');

module.exports ={

    FileList : function(str,readlinesync){

        var obj = new List();
        var arr = [];
        for(var i=0; i<str.length; i++){

            obj.append(str[i]);
        }
        var inst;
        console.log(obj.printList());

        var find = readlinesync.question("Enter the Word you want to Search.. : ");

        if(obj.search(find)){

            obj.removeIndex(find);
        }else{
            console.log("Word is not found !! , Now It is added to the List!... : ");
            obj.append(find);
        }
        console.log(obj.printList());
        //return obj;
    }

}