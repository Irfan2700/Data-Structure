var fs = require('fs');
var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');

function FileSearch() {

    try {
        var string = fs.readFileSync('MyFile.txt', 'utf8');


        var s1 = string.toLowerCase();
        var str = s1.split(' ');
        console.log(string);

        //console.log((utility.FileList(str,readlinesync)).printList());
        var s = utility.FileList(str, readlinesync);
        var temp = (s.printList()).split(" ");
        var a = temp[0];
        for (var i = 1; i < temp.length; i++) {
            a += " " + temp[i];
        }


        //console.log(a);

        var write = fs.writeFileSync('MyFile.txt', a.trim());

        console.log(a);

    } catch (e) {
        console.log("File not Found!!..Please check the directory..");
    }
}
FileSearch();