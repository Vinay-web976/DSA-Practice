class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

var sumOfLeftLeaves = function (root, isLeft = false) {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return isLeft ? root.key : 0;
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};

console.log(sumOfLeftLeaves(root));
