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

function searchInBST(root, x) {
  if (root === null) return false;
  if (root.data === x) return true;
  return x > root.data ? searchInBST(root.right, x) : searchInBST(root.left, x);
}

function searchInBSTItr(root, ele) {
  while (root !== null) {
    if (root.key === ele) return true;
    else if (ele > root.key) root = root.right;
    else root = root.left;
  }
  return false;
}

console.log(searchInBSTItr(root, 8));
