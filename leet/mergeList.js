class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

let head1 = new Node(1);
let head2 = new Node(1);
let temp2 = new Node(1);
let temp3 = new Node(2);
let temp4 = new Node(4);
let temp5 = new Node(5);
head1.next = temp2;
temp2.next = temp3;
head2.next = temp4;
temp4.next = temp5;

function mergeList(head1, head2) {
  let curr1 = head1;
  let curr2 = head2;
  let dummy = new Node(0);
  let newList = dummy;

  while (curr1 !== null && curr2 !== null) {
    if (curr1.data <= curr2.data) {
      newList.next = curr1;
      curr1 = curr1.next;
    } else {
      newList.next = curr2;
      curr2 = curr2.next;
    }
    newList = newList.next;
  }
  while (curr1 !== null) {
    newList.next = curr1;
    curr1 = curr1.next;
    newList = newList.next;
  }
  while (curr2 !== null) {
    newList.next = curr2;
    curr2 = curr2.next;
    newList = newList.next;
  }

  return dummy.next;
}

mergeList(head1, head2);
