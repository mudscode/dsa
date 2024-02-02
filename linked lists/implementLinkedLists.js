class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    const newNode = new Node(value);
    const previousNode = this.traverseToIndex(index - 1);
    const nextNode = previousNode.next;
    newNode.next = nextNode;
    previousNode.next = newNode;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const newLinkedList = new LinedList(1);
newLinkedList.append(2);
newLinkedList.append(3);

newLinkedList.prepend(0);

newLinkedList.insert(2, 34);

const values = newLinkedList.printList();
console.log(values);
// console.log(newLinkedList);
