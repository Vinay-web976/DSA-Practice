function reverseStack(stack) {
  if (stack.length <= 1) return;
  let top = stack.pop();
  reverseStack(stack);
  insertAtBottom(stack, top);
}

function insertAtBottom(stack, value) {
  if (stack.length === 0) {
    stack.push(value);
    return;
  }
  let x = stack.pop();
  insertAtBottom(stack, value);
  stack.push(x);
}

let stack = [5, 0, 2, 3, 1];
reverseStack(stack);
console.log(stack);
