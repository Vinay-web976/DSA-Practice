function reverseArray(arr, l, r) {
  if (l > r) return;
  [arr[l], arr[r]] = [arr[r], arr[l]];
  reverseArray(arr, l + 1, r - 1);
  console.log(arr);
}

//console.log(reverseArray([1, 2, 3, 4, 5], 0, 4));

function palindrome(str, i, n) {
  if (i >= Math.floor(n / 2)) return true;
  if (str[i] !== str[n - i - 1]) return false;
  return palindrome(str, i + 1, n);
}

//console.log(palindrome("abaaba", 0, 6));

function fibonacci(n) {
  if (n === 1 || n === 2) return 1;
  const left = fibonacci(n - 1);
  const right = fibonacci(n - 2);
  return left + right;
}

//console.log(fibonacci(4));

const result = [];
function subsequence(index, res, arr) {
  if (index >= arr.length) {
    console.log(res);
    return;
  }
  res.push(arr[index]);
  subsequence(index + 1, res, arr);
  res.pop(arr[index]);
  subsequence(index + 1, res, arr);
}

console.log(subsequence(0, [], [3, 1]));
