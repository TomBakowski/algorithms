// A binary tree is a hierarchical data structure consisting of nodes connected by edges. Each node can have zero or two child nodes.

class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinaryTree {
  constructor() {
      this.root = null;
  }
}

module.exports = BinaryTree;
