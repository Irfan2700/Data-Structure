var list = require('../Implementation/OrderedLinkedList');

function hash(){

    var a1 = [2,3,9,12,45,77,44,56,23,25,75];
    var obj1 = new list();
    var obj2 = new list();
    var obj3 = new list();
    var obj4 = new list();
    var arr = [];

    arr[0].push(obj1);
    arr[1].push(obj2);
    arr[2].push(obj3);
    arr[3].push(obj4);
    
    for(var i=0; i<a1.length; i++){

        var index = ((a1[i])%4);
        //console.log(index);
        
        arr[index].add(a1[i]);
        
        arr[index].sorting();
    }
     console.log(arr[0].printList());
     console.log(arr[1].printList());
    // console.log(arr[2].printList());
    // console.log(arr[3].printList());
    //index1 = 45%11;
    //console.log(arr);
   // console.log(arr[index1].search(parseInt(45)));



}
hash();