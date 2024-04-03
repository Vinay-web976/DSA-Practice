export class Deque {
  constructor(x) {
    this.cap = x;
    this.arr = new Array(x);
    this.front = 0;
    this.rear = 0;
    this.sz = 0;
  }

  getFront() {
    if (this.sz === 0) return -1;
    return this.arr[this.front];
  }

  deleteFront() {
    if (this.sz === 0) return;
    this.front = (this.front + 1) % this.cap;
    this.size--;
  }

  getRear() {
    if (this.sz === 0) return -1;
    let rear = (this.front + this.sz - 1) % this.cap;
    return this.arr[rear];
  }

  insertFront(x) {
    if (this.sz === this.cap) return;
    this.front = (this.front + this.cap - 1) % this.cap;
    this.arr[this.front] = x;
    this.sz++;
  }

  insertRear(x) {
    if (this.sz === this.cap) return;
    const rear = (this.front + this.sz) % this.cap;
    this.arr[rear] = x;
    this.sz++;
  }

  deleteRear() {
    if (this.sz === 0) return;
    this.sz--;
  }
}

const d = new Deque(5);

d.insertFront(30);
d.insertFront(40);
d.insertRear(10);
d.insertRear(20);
d.deleteRear();
d.deleteFront();
console.log(d.getFront());
console.log(d.getRear());
