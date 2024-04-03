function sortStack(s, aux = []) {
  while (s.length !== 0) {
    x = s.pop();
    while (aux.length > 0 && aux[aux.length - 1] > x) {
      s.push(aux.pop());
    }
    aux.push(x);
  }
  console.log(aux);
}

function sortStackRecursion(stack) {
  if (stack.length <= 1) {
    return stack;
  }
  const top = stack.pop();

  sortStackRecursion(stack);
  insertInSorted(stack, top);
}

function insertInSorted(stack, value) {
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }

  const top = stack.pop();
  insertInSorted(stack, value);
  stack.push(top);
}
let stack = [5, 0, 2, 3, 1];
sortStackRecursion(stack);
console.log(stack);
