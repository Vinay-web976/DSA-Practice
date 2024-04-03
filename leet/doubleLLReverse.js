class Node {
  constructor(x) {
    this.data = x;
    this.prev = null;
    this.next = null;
  }
}

function reverseDLL(head) {
  if (head === null) return null;
  let curr = head;
  let prev = head;
  while (curr) {
    prev = curr;
    [curr.next, curr.prev] = [curr.prev, curr.next];
    curr = curr.prev;
  }
  return prev;
}

let node1 = new Node(3);
let node2 = new Node(4);
let node3 = new Node(5);

node1.next = node2;
node2.next = node3;
node2.prev = node1;
node3.prev = node2;

reverseDLL(node1);
