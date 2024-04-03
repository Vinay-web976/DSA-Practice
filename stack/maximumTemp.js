function maximumTemp(temperatures) {
  const stack = [];
  const res = [];
  stack.push(0);

  for (let j = 1; j < temperatures.length; j++) {
    while (
      stack.length !== 0 &&
      temperatures[j] > temperatures[stack[stack.length - 1]]
    ) {
      res[stack[stack.length - 1]] = j - stack[stack.length - 1];
      stack.pop();
    }
    stack.push(j);
  }

  while (stack.length !== 0) {
    let index = stack[stack.length - 1];
    stack.pop();
    res[index] = 0;
  }
  return res;
}

console.log(maximumTemp([30, 60, 90]));
