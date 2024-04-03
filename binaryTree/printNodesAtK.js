class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);

function printNodesAtK(root, K) {
  if (root === null) return;
  if (K === 0) console.log(root.key);
  printNodesAtK(root.left, K - 1);
  printNodesAtK(root.right, K - 1);
}

//printNodesAtK(root, 2);

function printNodesAtKFromLeaf(root, k, visited = [], count = 0) {
  if (root === null) return;
  //arr[count] = root.key;
  visited[count - k] = false;
  if (
    root.left === null &&
    root.right === null &&
    count - k >= 0 &&
    visited[count - k] === false
  ) {
    visited[count - k] = true;
  }
  printNodesAtKFromLeaf(root.left, k, visited, count + 1);
  printNodesAtKFromLeaf(root.right, k, visited, count + 1);
}

function driverCode(node, k) {
  const visited = new Array(1000).fill(false);
  printNodesAtKFromLeaf(node, k, visited);
  return visited.filter((item) => item).length;
}
console.log(driverCode(root, 1));
