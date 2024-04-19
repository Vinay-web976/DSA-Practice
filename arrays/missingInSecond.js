function findMissing(a, b, n, m) {
  let res = [];
  let bFreq = {};

  for (let i = 0; i < m; i++) {
    bFreq[b[i]] = true;
  }

  for (let i = 0; i < n; i++) {
    if (!bFreq[a[i]]) res.push(a[i]);
  }
  return res;
}

console.log(
  findMissing([-9, -8, 4, -2, -9, -9], [-9, -4, -6, 5, -6, -6, 1, 4], 6, 8)
);
