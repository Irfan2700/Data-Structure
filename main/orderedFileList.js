var fs = require('fs');
var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');

function orderedFileSearch() {

    try {
        var string = fs.readFileSync('MyFile.1.txt', 'utf8');
        var s1 = string.toLowerCase();
        var str = s1.split(' ');
        console.log(string);

        //console.log((utility.FileList(str,readlinesync)).printList());
        var s = utility.orderedFileList(str, readlinesync);
        var temp = (s.printList()).split(" ");
        var a = temp[0];
        for (var i = 1; i < temp.length; i++) {
            a += " " + temp[i];
        }

        var write = fs.writeFileSync('MyFile.1.txt', a.trim());

        console.log(a);

    } catch (e) {
        console.log("File not Found!!..Please check the directory..");
    }
}
orderedFileSearch();