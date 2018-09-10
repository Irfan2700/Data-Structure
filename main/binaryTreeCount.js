var binary = require('../Implementation/binaryTree.js');
var readlinesync = require('readline-sync');


function binaryone(){

    var bin = new binary();

    var read = readlinesync.question("Enter the total Number of the element you want to add in Tree : ");

    for(var i=0; i<read; i++){

        var entry = readlinesync.question(`Enter the ${i+1} element : `);
        bin.insert(entry);
    }

    console.log(bin.size());
}
binaryone();