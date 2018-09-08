class Node {
    constructor(e, n) {
        this.ele = e;
        this.next = n;
    }
};

module.exports = class Queue {

    constructor() {
        this.first = null;
        this.rear = null;
        this.count = 0;
        this.balance = parseInt(1000);
    }

    queue() {

        this.first = new Node(null, null);
        this.rear = this.first;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {

        if (this.size() === 0)
            return true
        else return false;
    }

    enqueue(e) {

        if (this.first === null) {

            this.first = new Node(e, null);
            this.rear = this.first;
            this.count++;
            return;
        }

        this.rear.next = new Node(e, null);
        this.rear = this.rear.next;
        this.count++;
    }

    dequeue(){

        if (this.first === null) return null;

        var n = this.first.ele;

        this.first = this.first.next;
        this.count--;
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

     
}