class Node {
    constructor(e, n) {
        this.ele = e;
        this.next = n;
    }
};

module.exports = class Stack {

    constructor() {
        this.first = null;
        this.last = null;
        this.count = 0;
    }

    stack() {

        this.first = new Node(null, null);
        this.last = this.first;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {

        if (this.size() === 0)
            return -1
        else return 1;
    }

    pop() {

        if (this.first === null) return null;

        var n = this.first.ele;

        this.first = this.first.next;
        this.count--;
        return n;
    }

    push(e) {

        //if (this.first === null) return null;

        this.first = new Node(e, this.first);
        this.count++;

    }

    peek(){

        if(this.first === null) return null;

        return this.first.ele;
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