var fs = require('fs');
var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');

function FileSearch(){

   var string = fs.readFileSync('MyFile.txt', 'utf8');
    var s1 = string.toLowerCase();
   var str = s1.split(' ');
    console.log(string);

    //console.log((utility.FileList(str,readlinesync)).printList());
    utility.FileList(str,readlinesync);
    
}
FileSearch();