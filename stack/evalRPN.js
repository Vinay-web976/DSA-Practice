var OPERATORS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => Math.trunc(a / b),
};

function evalRPN(tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (isNaN(tokens[i])) {
      const var2 = stack.pop();
      const var1 = stack.pop();
      const operation = OPERATORS[tokens[i]];
      stack.push(operation(var1, var2));
    } else {
      stack.push(Number(tokens[i]));
    }
  }
  return stack[0];
}

console.log(evalRPN(["4", "13", "5", "/", "+"]));
