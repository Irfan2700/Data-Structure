 class Node {
     constructor(e, n) {
         this.ele = e;
         this.next = n;
     }
 };

 module.exports = class LinkedList {

     constructor() {
         this.first = null;
         this.last = null;
         this.count = 0;
     }


     append(e) {

         if (this.first === null) {

             this.first = new Node(e, null);
             this.last = this.first;
             this.count++;
             return;
         }

         this.last.next = new Node(e, null);
         this.last = this.last.next;
         this.count++;
     }

     insert(pos, e) {


         if (pos >= this.size()) throw ("Index Out of Bounds!!!");

         else {
             if (pos === 0) {

                 this.first = new Node(e, this.first);
                 this.count++;
                 return;
             }

             var n = this.first;

             for (var i = 0; i < pos; i++) {
                 n = n.next;
             }

             n.next = new Node(e, n.next);
             this.count++;
         }
     }

     get(index) {

         if (index >= this.size()) throw ("Index Out of Bounds!!!");


         else {
             var n = this.first;
             for (var i = 1; i <= index; i++) {
                 n = n.next;
             }
             //var s = ''
             console.log(this.count);
             return n.ele;
         }


     }

     size() {
         return this.count;
     }

     removeIndex(index) {

         if (index >= this.size()) throw ("Index Out of Bounds!!!");

         else {
             if (this.first === null) return null;

             if (index === 0) {
                 var n = this.first;

                 this.first = n.next;
                 this.count--;

             }
             var n = this.first;

             for (var i = 1; i < index; i++) {

                 n = n.next;
             }
             n.next = n.next.next;
             this.count--;
         }
     }

     remove() {

         if (this.first === null) return null;

         var n = this.first;

         for (var i = 1; i < this.size(); i++) {

             n = n.next;
         }
         this.last = n;
         n = null;
         this.count--;
     }

     isEmpty() {

         if (this.size() === 0)
             return -1
         else return 1;
     }

     search(e) {

         if (this.first === null) throw "List is Empty";

         else {

             if (this.first.ele === e) return true;

             var n = this.first;

             for (var i = 1; i <= this.size(); i++) {

                 if (n.ele === e) {
                     return true;
                 }
                 n = n.next;
             }
             return false;
         }
     }

     indexOf(e){

        if (this.first === null) throw "List is Empty";

         else {

             if (this.first.ele === e) return 0;

             var n = this.first;

             for (var i = 1; i <= this.size(); i++) {

                 if (n.ele === e) {
                     return i;
                 }
                 n = n.next;
             }
             return -1;
         }
     }

     pop(){

        if (this.first === null) return null;

        var n = this.first;

         for (var i = 1; i < this.size(); i++) {

             n = n.next;
         }
         var p = n.ele;
         n = null;
         this.count--;
         return p;
     }

     popIndex(index){

        if (index >= this.size()) throw ("Index Out of Bounds!!!");

        else {
            if (this.first === null) return null;

            if (index === 0) {
                var n = this.first;
                var p = n.ele;
                this.first = n.next;
                this.count--;
                return p;
            }
            var n = this.first;

            for (var i = 1; i < index; i++) {

                n = n.next;
            }
            var p = n.ele;
            n = n.next;
            this.count--;
            return p;
        }
     }

     printList(){

        if (this.size()===0) return "[]";

        var n = this.first;
        var str = n.ele+" ";
        while(n.next!== null){

            n = n.next;
            str += n.ele+" ";
        }
        return str;
        
     }
     
     //removeElement(e){
     
        sorting() {

            var a = [];
    
            var n = this.first;
            for (var i = 1; i <= this.size(); i++) {
    
                if (this.size() === 0) {
                    throw "Empty List!!!";
                    return;
                }
                //var n = obj.first;
                a.push(n.ele);
                n = n.next;
    
            }
    
            for (var i = 1; i < a.length; i++) {
                var key = parseInt(a[i]);
                var j = i - 1;
    
                while (j > -1 && parseInt(a[j]) > key) {   //shifting the small number into the left most
    
                    a[j + 1] = a[j];        //puting the larger number in place of smaller one
                    j--;
                }
    
                a[j + 1] = key;       //puting the smaller in the left most postion
            }
    
    
    
            this.first = new Node(a[0], null);
            this.last = this.first;
            this.count++;
    
            for(var i=1; i<a.length; i++){
    
             this.last.next = new Node(a[i], null);
             this.last = this.last.next;
             this.count++;
    
            }
    
        }
     

 };

 // var readlinesync = require('readline-sync');
 // //var utility = require('/home/irfan2700/Javascript/Data Structure/utility/utility.js');

 // function add(){

 //     var read = readlinesync.question("enter the Number...");

 //     var obj = new LinkedList();
 //     obj.addList(read);
 //     var res = obj.get(0);
 //     console.log(res);
 // }
 // add();