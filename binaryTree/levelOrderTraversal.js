import { Queue } from "../queue/queueUsingLinkedList.js";

class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);

function levelOrderTraversal(root) {
  if (root === null) return;
  let queue = new Queue();
  queue.enque(root);

  while (!queue.isEmpty()) {
    let curr = queue.deque();
    if (curr.left !== null) queue.enque(curr.left);
    if (curr.right !== null) queue.enque(curr.right);

    console.log(curr.key);
  }
  return;
}

//levelOrderTraversal(root);
function levelOrderTraversalLineByLine(root) {
  let result = [];
  inorder(root, 0, result);
  return result;
}

function inorder(root, level, map) {
  if (root == null) return null;

  if (map[level] == undefined) {
    map[level] = [];
  }
  map[level].push(root.key);
  inorder(root.left, level + 1, map);
  inorder(root.right, level + 1, map);
}

function levelOrder(node) {
  //your code here
  let ans = [];
  let temp = [];
  if (node === null) return ans;
  let queue = new Queue();
  queue.enque(node);
  queue.enque(null);
  while (queue.size() > 1) {
    let curr = queue.deque();
    if (curr === null) {
      ans.push(temp);
      temp = [];
      queue.enque(null);
      continue;
    }
    if (curr.left !== null) queue.enque(curr.left);
    if (curr.right !== null) queue.enque(curr.right);
    temp.push(curr.key);
  }
  if (temp.length > 0) ans.push(temp);
  return ans;
}

levelOrder(root);
