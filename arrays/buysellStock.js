function buySellStock(arr) {
  let res = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      res += arr[i] - arr[i - 1];
    }
  }
  return res;
}

//console.log(buySellStock([1, 5, 3, 1, 2, 8]));

// Function to find the days of buying and selling for max profit

function buySellDays(A) {
  let profit = 0;
  let result = [];
  let i = 0;
  for (let j = 1; j < A.length; j++) {
    if (A[j] > A[j - 1]) {
      profit += A[j] - A[j - 1];
    } else {
      if (profit > 0) {
        result.push([i, j - 1]);
      }
      i = j;
    }
  }
  if (profit > 0) result.push([i, A.length - 1]);
  return result;
}

// console.log(buySellDays([4, 2, 2, 2, 4]));

// Buy sell single day

function buySellSingle(prices) {
  let n = prices.length;
  let left = 0;
  let right = 1;
  let res = 0;
  while (right < n) {
    if (prices[right] < prices[left]) {
      left = right;
    }
    const profit = prices[right] - prices[left];
    res = Math.max(profit, res);
    right++;
  }
  return res;
}

console.log(buySellSingle([4, 2, 1, 7]));
