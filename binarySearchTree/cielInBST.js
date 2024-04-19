class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(11);
root.left.left = new Node(4);
root.left.right = new Node(7);
root.left.right.right = new Node(8);

function findCeil(root, input) {
  let ceil = null;
  while (root !== null) {
    if (root.key === input) return root;
    else if (root.key < input) root = root.right;
    else {
      ceil = root;
      root = root.left;
    }
  }
  return ceil === null ? -1 : ceil.key;
}

console.log(findCeil(root, 6));
