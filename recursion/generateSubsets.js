function printN(i, n) {
  if (i == n) return;
  printN(i + 1, n);
  console.log(i);
}

//printN(0, 5);

function subset(i, str, res) {
  if (i >= str.length) {
    console.log(res);
    return;
  }
  res += str[i];
  subset(i + 1, str, res);
  res = res.slice(0, res.length - 1);
  subset(i + 1, str, res);
}

//subset(0, "ABC", "");

function subsetArr(arr, i = 0, temp = []) {
  if (i >= arr.length) {
    console.log(temp);
    return;
  }
  temp.push(arr[i]);
  subsetArr(arr, i + 1, temp);
  temp.pop();
  subsetArr(arr, i + 1, temp);
}

function subsetArrFor(arr, ind = 0, temp = [], res = []) {
  res.push([...temp]);
  for (let i = ind; i < arr.length; i++) {
    if (i !== ind && arr[i] === arr[i - 1]) continue;
    temp.push(arr[i]);
    subsetArrFor(arr, i + 1, temp, res);
    temp.pop();
  }
  return res;
}
console.log(subsetArrFor([1, 2, 3, 4, 5, 6, 7, 8, 9]));
