class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

let head = new Node(10);
head.next = new Node(25);
head.next.next = new Node(20);
head.next.next.next = new Node(15);
head.next.next.next.next = head;

function printCircularLL(head) {
  if (!head) console.log(null);
  let curr = head;
  do {
    console.log(curr.data);
    curr = curr.next;
  } while (curr !== head);
}

function insertBegin(head, data) {
  const temp = new Node(data);
  if (!head) {
    temp.next = temp;
    return temp;
  }
  let curr = head;
  while (curr.next !== head) {
    curr = curr.next;
  }
  temp.next = head;
  curr.next = temp;
  return temp;
}

function insertBeginConst(head, data) {
  const temp = new Node(data);
  if (!head) {
    temp.next = temp;
    return temp;
  }
  temp.next = head.next;
  head.next = temp;
  [temp.data, head.data] = [head.data, temp.data];
  return head;
}

function insertAtPosition(head, pos, data) {
  const temp = new Node(data);
  if (!head) {
    temp.next = temp;
    return temp;
  }
  let index = 1;
  let curr = head;
  while (index < pos) {
    curr = curr.next;
    index++;
    if (curr === head) {
      return head;
    }
  }
  temp.next = curr.next;
  curr.next = temp;
  return head;
}

function isCircular(head) {
  let curr = head;
  if (!curr) return 0;
  if (curr.next === head) return 1;
  while (curr.next !== head) {
    curr = curr.next;
    if (curr === null) {
      return 0;
    }
  }
  return 1;
}

function deleteKth(head, pos) {
  let index = 1;
  let curr = head;
  if (!head) return null;
  if (pos === 1) {
    if (curr.next === curr) return null;
    [curr.data, curr.next.data] = [curr.next.data, curr.data];
    curr.next = curr.next.next;
    return curr;
  }
  while (index < pos - 1) {
    curr = curr.next;
    index++;
    if (curr === head) {
      return head;
    }
  }
  curr.next = curr.next.next;
  return head;
}
deleteKth(head, 1);
