function NumberofElementsInIntersection(a, b, n, m) {
  // code here
  let aIndex = {};
  let bIndex = {};
  let count = 0;

  for (let i = 0; i < n; i++) {
    aIndex[a[i]] = true;
  }

  for (let i = 0; i < m; i++) {
    bIndex[b[i]] = true;
  }

  for (let key in aIndex) {
    if (aIndex.hasOwnProperty(key) && bIndex[key]) {
      count++;
    }
  }

  return count;
}

console.log(
  NumberofElementsInIntersection([89, 24, 75, 11, 23], [89, 2, 4], 5, 3)
);
