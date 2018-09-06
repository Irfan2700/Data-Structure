var readlinesync = require('readline-sync');
var utility = require('../LinkedList.js');

function add(){

    

    var obj = new utility();
    for(var i=0; i<4; i++){
    var read = readlinesync.question("enter the Number...");
    obj.append(read);
    }
    var res = obj.get(0);
    console.log(res);
}
add();