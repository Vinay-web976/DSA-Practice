function checkKthBit(n, k) {
  for (let i = 0; i < k; i++) n = n >> 1;
  return (n & 1) === 1;
}

console.log(checkKthBit(4, 0));
