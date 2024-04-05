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

function insBST(root, ele) {
  if (root === null) return new Node(ele);
  else if (ele === root.key) return root;
  else if (ele > root.key) root.right = insBST(root.right, ele);
  else if (ele < root.key) root.left = insBST(root.left, ele);
  return root;
}

//console.log(insBST(root, 40));

function insBSTiterative(node, data) {
  let par = null;
  let curr = node;
  while (curr !== null) {
    par = curr;
    if (data < curr.key) curr = curr.left;
    else if (data > curr.key) curr = curr.right;
    else return node;
  }

  if (par === null) return new Node(data);
  else if (data > par.key) par.right = new Node(data);
  else if (data < par.key) par.left = new Node(data);
  return node;
}

console.log(insBSTiterative(root, 40));
