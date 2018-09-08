var readlinesync = require('readline-sync');
// var utility = require('../Implementation/UnorderedLinkedList.js');
// var util = require('../Implementation/OrderedLinkedList');
var u = require('../Implementation/stack.js');
var ut = require('../Implementation/deque.js');

function add() {



    var obj = new ut();
    for (var i = 0; i < 4; i++) {
        var read = readlinesync.question("enter the Number...");
        obj.addRear(read);
    }

    console.log(obj.printList());
        obj.removeRear();
//    obj.addRear();
//    obj.addRear();
//    obj.addRear();
//    obj.addRear();

    //console.log(obj.isEmpty());
     console.log(obj.printList());

    // var a = [];
    //  obj.pop();
    //  obj.pop();
     
    // console.log(obj.printList());
    // console.log(obj.isEmpty());
    // var n = obj.first;
    // for (var i = 1; i <= obj.size(); i++){

    //     if(obj.size() === 0) {throw "Empty List!!!"; return;}
    //         //var n = obj.first;
    //         a.push(n.ele);
    //         n = n.next;
        
    // }
    
    // obj.sorting();

    //console.log(obj.printList());
    

    //var res = obj.get(0);
    //console.log(res);
}
add();