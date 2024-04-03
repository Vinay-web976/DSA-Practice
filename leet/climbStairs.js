function climbStairs(n) {
  let x = 0;
  let y = 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = x + y;
    x = y;
    y = sum;
  }
  return sum;
}

function fibonacci(n) {
  if (n === 1 || n === 0) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));
