var list = require('../Implementation/OrderedLinkedList');

function hash(){

    var a1 = [2,3,9,12,45,77,44,56,23,25,75];
    var obj = new list();
    var arr = [];

    for(var i=0; i<11; i++){
        
        arr.push(obj);
        
    }
    
    for(var i=0; i<a1.length; i++){

        var index = (a1[i])%11;
        arr[index].add(a1[i]);
        
       // arr[index].sorting();
    }
    console.log(arr[0].printList());
    console.log(arr[1].printList());
    console.log(arr[2].printList());
    console.log(arr[3].printList());
    //index1 = 45%11;
    //console.log(arr);
   // console.log(arr[index1].search(parseInt(45)));



}
hash();