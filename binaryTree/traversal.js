class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(65);
root.right.left = new Node(40);
root.right.right = new Node(50);

function inOrderTraversal(root) {
  if (root !== null) {
    inOrderTraversal(root.left);
    console.log(root.key);
    inOrderTraversal(root.right);
  }
}

function preOrderTraversal(root) {
  if (root !== null) {
    console.log(root.key);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}

function postOrderTraversal(root) {
  if (root !== null) {
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.key);
  }
}

function maxInBinarytree(root) {
  if (root === null) return Number.NEGATIVE_INFINITY;
  return Math.max(
    maxInBinarytree(root.left),
    maxInBinarytree(root.right),
    root.key
  );
}

function sizeOfBinaryTree(root) {
  if (root === null) return 0;
  return sizeOfBinaryTree(root.left) + sizeOfBinaryTree(root.right) + 1;
}

console.log(sizeOfBinaryTree(root));
