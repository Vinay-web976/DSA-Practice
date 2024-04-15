//Given two arrays a and b both of size n. Given q queries in an arrray query each having a positive integer x denoting an index of the array a. For each query, your task is to find all the elements less than or equal to a[x] in the array b.

function countElements(n, a, b, q, queries) {
  const countArr = new Array(100000).fill(0);
  const res = [];
  let uptoSum = 0;

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    max = Math.max(b[i], max);
    countArr[b[i]]++;
  }
  const sumArray = new Array(max);
  for (let i = 0; i <= max; i++) {
    if (countArr[i] >= 0) {
      uptoSum += countArr[i];
    }
    sumArray[i] = uptoSum;
  }

  for (let i = 0; i < q; i++) {
    if (a[queries[i]] >= max) {
      res.push(sumArray[sumArray.length - 1]);
    } else {
      res.push(sumArray[a[queries[i]]]);
    }
  }
  return res;
}

console.log(countElementsMap(4, [1, 1, 5, 5], [0, 1, 2, 3], 4, [0, 1, 2, 3]));

function countElementsMap(n, a, b, q, queries) {
  const countMap = {};

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    const val = b[i];
    max = Math.max(val, max);
    countMap[val] = (countMap[val] || 0) + 1;
  }

  // Process queries
  const res = [];
  for (let i = 0; i < q; i++) {
    const idx = queries[i];
    const key = a[idx];
    if (key >= max) {
      res.push(n);
    } else {
      let querySum = 0;
      for (let j = 0; j <= key; j++) {
        querySum += countMap[j] || 0;
      }
      res.push(querySum);
    }
  }
  return res;
}
