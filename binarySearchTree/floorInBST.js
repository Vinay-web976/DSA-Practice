class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.right.left = new Node(12);
root.right.right = new Node(30);

function floorBST(root, key) {
  let floor = null;

  while (root !== null) {
    if (root.key === key) return root;
    else if (root.key > key) {
      root = root.left;
    } else {
      floor = root;
      root = root.right;
    }
  }
  return floor;
}

console.log(floorBST(root, 14));
