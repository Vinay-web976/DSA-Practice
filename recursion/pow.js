function myPow(x, n) {
  if (n === 0) return 1;
  let pow = Math.abs(n);

  let res =
    pow % 2 === 0 ? myPow(x * x, pow / 2) : x * myPow(x * x, (pow - 1) / 2);

  return n < 0 ? 1 / res : res;
}

console.log(myPow(2.0, 10));
