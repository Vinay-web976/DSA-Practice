function squareRoot(num) {
  let arr = Array.from(
    { length: Math.floor(num / 2) },
    (_, index) => index + 1
  );
  let i = 0;
  let j = arr.length - 1;
  let root = 0;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] * arr[mid] === num) {
      return arr[mid];
    } else if (arr[mid] * [mid] < num) {
      root = arr[mid];
      i++;
    } else {
      j--;
    }
  }
  return root;
}

console.log(squareRoot(2147395599));
