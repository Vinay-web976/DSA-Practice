class QNode {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.count = 0;
  }

  enque(data) {
    let newNode = new QNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
    this.count++;
  }

  deque() {
    if (this.head === null) return null;
    let temp = this.head.data;
    this.head = this.head.next;
    this.count--;
    return temp;
  }

  getFront() {
    if (this.count === 0) return null;
    return this.head.data;
  }

  getRear() {
    if (this.count === 0) return null;
    return this.rear.data;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }
}
