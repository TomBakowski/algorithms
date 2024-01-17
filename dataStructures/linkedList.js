// A linked list is a collection of nodes where each node contains a value and a reference to the next node.

class Node {
  constructor(data, next = null) {
      this.data = data;
      this.next = next;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }
}

module.exports = LinkedList;
