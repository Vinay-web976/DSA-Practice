function printKmax(arr, n, k) {
  let str = "";
  let Qi = [];
  let i;
  for (i = 0; i < k; ++i) {
    while (Qi.length != 0 && arr[i] >= arr[Qi[Qi.length - 1]]) Qi.pop();

    Qi.push(i);
  }

  for (i; i < n; ++i) {
    str += arr[Qi[0]] + " ";
    while (Qi.length != 0 && Qi[0] <= i - k) Qi.shift();

    while (Qi.length != 0 && arr[i] >= arr[Qi[Qi.length - 1]]) Qi.pop();

    Qi.push(i);
  }

  str += arr[Qi[0]];
  console.log(str);
}

console.log(printKmax([12, 1, 78, 90, 57, 89, 56], 7, 3));
