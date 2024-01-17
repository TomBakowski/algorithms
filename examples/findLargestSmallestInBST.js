// Iterative function to find smallest element in a BST
function findMinNodeIterative(node) {
  if (node === null) {
      return null;
  }

  while (node && node.left !== null) {
      node = node.left;
  }

  return node;
}

// Iterative function to find largest element in a BST
function findMaxNodeIterative(node) {
  if (node === null) {
      return null;
  }

  while (node && node.right !== null) {
      node = node.right;
  }

  return node;
}

// Recursive function to find smallest element in a BST
function findMinNodeRecursive(node) {
  if (node === null) {
      return null;
  } else if (node.left === null) {
      return node;
  } else {
      return findMinNodeRecursive(node.left);
  }
}

// Recursive function to find largest element in a BST
function findMaxNodeRecursive(node) {
  if (node === null) {
      return null;
  } else if (node.right === null) {
      return node;
  } else {
      return findMaxNodeRecursive(node.right);
  }
}

export {
  findMaxNodeIterative, findMaxNodeRecursive, findMinNodeIterative, findMinNodeRecursive
};
