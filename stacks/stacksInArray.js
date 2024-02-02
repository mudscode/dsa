class Stack {
  constructor() {
    this.result = [];
  }

  push(value) {
    this.result.push(value);
    return this;
  }

  pop() {
    this.result.pop();
    return this;
  }

  peek() {
    return this.result[this.result.length - 1];
  }
}

const myStack = new Stack();
myStack.push(343);
myStack.push(3509);
myStack.pop();
// myStack.peek();
