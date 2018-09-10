class Node {
    constructor(e) {
        this.ele = e;
        this.left = null;
        this.right = null;

    }
};

module.exports = class BinaryTree {

    constructor() {

        this.root = null;
        this.count = 0;
        this.c = 0;
    }

    insert(e) {

        var newNode = new Node(e);

        if (this.root === null) {

            this.root = newNode;
            this.count++;
        } else {

            this.insertNode(this.root, newNode);
            this.count++;
        }
    }

    insertNode(node, newNode) {

        if (newNode.data < node.data) {

            if (node.left === null) {
                node.left = newNode;
                this.count++;
            } else

                this.insertNode(node.left, newNode);
                this.count++;
        } else {

            if (node.right === null) {
                node.right = newNode;
                this.count++;
            } else

                this.insertNode(node.right, newNode);
                this.count++;
        }
    }

    size(){

        return this.count;
    }


}