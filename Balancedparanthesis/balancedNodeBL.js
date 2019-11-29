class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
    }
};
class Stack { //creating new stack
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(data) {
        let node = new Node(data);//creating new node

        node.previous = this.top;
        this.top = node; //pushing element at top of stack
        this.size += 1; //incrementing size of stack
        return this.top;
    };
    pop() {
        let temp = this.top;
        this.top = this.top.previous;//romoving top element from stack
        this.size -= 1; //decrementing size
        return temp;
    }
    isEmpty() {
        console.log(this.size === 0);
    }
};
module.exports = { Stack, Node }