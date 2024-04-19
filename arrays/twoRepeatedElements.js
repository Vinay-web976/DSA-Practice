function twoRepeated(arr, n) {
  const res = [];
  for (let i = 0; i < n + 2; i++) {
    let index = Math.abs(arr[i]) - 1;
    if (arr[index] < 0) {
      res.push(Math.abs(arr[i]));
    } else {
      arr[index] *= -1;
    }
  }

  return res;
}

console.log(twoRepeated([1, 2, 1, 3, 4, 3], 4));
