class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    const newNode = new Node(value);
    // newNode.next = this.head;
    // this.head = newNode;
    // this.length++;
    // if(!this.head) {
    //     this.head = newNode;
    // }
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    } else if (!this.head) {
      this.head = newNode;
      this.length++;
    }
  }

  insert(index, value) {
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    this.length++;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    const follower = unwantedNode.next;
    leader.next = follower;
    this.length--;
  }

  traverseToIndex(index) {
    let counter = 0;
    const currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode.next !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const newLinkedList = new LinkedList();
newLinkedList.add(12);
newLinkedList.insert(1, 2344);
newLinkedList.remove(1);
newLinkedList.add(14);
// newLinkedList.printList();
console.log(newLinkedList);
