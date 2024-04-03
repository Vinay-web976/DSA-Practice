function maxLengthEvenOdd(arr) {
  let isLastEven = arr[0] % 2 === 0;
  let res = 1;
  let temp = 1;
  for (let j = 1; j < arr.length; j++) {
    let isCurrentEven = arr[j] % 2 === 0;
    if ((isLastEven && isCurrentEven) || (!isLastEven && !isCurrentEven)) {
      res = Math.max(temp, res);
      temp = 1;
    } else temp++;
    isLastEven = isCurrentEven;
  }
  if (temp > 1) res = Math.max(temp, res);
  return res;
}

console.log(maxLengthEvenOdd([10, 12, 14, 7, 8]));
