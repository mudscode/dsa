class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = this.top;
    }
    this.length++;
  }

  peek() {
    return this.top;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
  }
}

const myStack = new Stack();
myStack.push("Mudassir");
myStack.push("Husna");
myStack.push("Haleema");
myStack.pop();
// myStack.peek();
// console.log(myStack);
