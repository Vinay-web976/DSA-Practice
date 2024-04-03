function printPattern(n) {
  let i = n;
  let res = [];
  while (i > 0) {
    res.push(i);
    i -= 5;
  }
  do {
    res.push(i);
    i += 5;
  } while (i <= n);

  return res;
}

console.log(printPattern(16));
