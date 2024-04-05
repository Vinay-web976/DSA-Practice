class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(8);
root.right = new Node(30);
root.right.right = new Node(40);
root.right.left = new Node(20);

function deleteInBST(root, ele) {
  if (root === null) return null;
  if (ele > root.key) {
    root.right = deleteInBST(root.right, ele);
  } else if (ele < root.key) {
    root.left = deleteInBST(root.left, ele);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      root.key = getSuccessor(root.right);
      root.right = deleteInBST(root.right, root.key);
    }
  }
  return root;
}

function getSuccessor(curr) {
  while (curr.left !== null) {
    curr = curr.left;
  }
  return curr.key;
}

console.log(deleteInBST(root, 4000));
