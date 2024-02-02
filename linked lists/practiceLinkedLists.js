class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  insert(index, value) {
    const newNode = new Node(value);
    const previousNode = this.traverseToIndex(index - 1);
    const nextNode = previousNode.next;
    previousNode.next = newNode;
    newNode.next = nextNode;
  }

  remove(index) {
    const previousNode = this.traverseToIndex(index - 1);
    const nodeToBeDeleted = previousNode.next;
    previousNode.next = nodeToBeDeleted.next;
    this.length--;
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

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const newLinkedList = new LinkedList();
newLinkedList.prepend(1);
newLinkedList.prepend(0);
// newLinkedList.append(2);
// newLinkedList.append(3);
newLinkedList.insert(2, 69);
// newLinkedList.remove(3);
newLinkedList.printList();
console.log(newLinkedList);
