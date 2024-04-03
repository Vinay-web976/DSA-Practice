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
root.right.left = new Node(40);
root.right.right = new Node(50);
root.right.right.right = new Node(70);

function heightOfTree(root) {
  if (root === null) {
    return 0;
  }
  let lh = heightOfTree(root.left);
  let rh = heightOfTree(root.right);
  return Math.max(lh, rh) + 1;
}

console.log(heightOfTree(root));
