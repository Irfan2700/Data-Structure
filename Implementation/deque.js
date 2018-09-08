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
        // this.balance = parseInt(1000);
    }

    deque() {

        this.first = new Node(null, null);
        this.rear = this.first;
        this.count++;
    }

    addFront(e) {

        this.first = new Node(e, this.first);
        this.count++;
    }

    addRear(e) {

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

    removeFront() {

        if (this.first === null) return null;

        var n = this.first.ele;

        this.first = this.first.next;
        this.count--;
       // console.log(n);
        return n;
    }

    removeRear() {

       // if (this.last === null) return null;

        var n = this.first;
       // var m = this.first;

        for (var i = 1; i < this.size() -1 ; i++) {

            n = n.next;
        }
        var ele = n.next.ele;
        //this.rear = n.next;
        //n = n.next;
        n.next = null;
        this.count--;
        //console.log(ele)
        return ele;
    }

    size() {
        return this.count;
    }

    isEmpty() {

        if (this.size() === 0)
            return true
        else return false;
    }

    printList() {

        if (this.size() === 0) return "[]";

        var n = this.first;
        var str = n.ele + " ";
        while (n.next !== null) {

            n = n.next;
            str += n.ele + " ";
        }
        return str;

    }

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

            while (j > -1 && parseInt(a[j]) > key) { //shifting the small number into the left most

                a[j + 1] = a[j]; //puting the larger number in place of smaller one
                j--;
            }

            a[j + 1] = key; //puting the smaller in the left most postion
        }



        this.first = new Node(a[0], null);
        this.rear = this.first;
        this.count++;

        for (var i = 1; i < a.length; i++) {

            this.rear.next = new Node(a[i], null);
            this.rear = this.rear.next;
            this.count++;

        }

    }

}