function countOccurence(num, x) {
  let str = num.toString();
  let i = 0;
  let j = str.length - 1;
  let count = 0;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    let number = parseInt(str[mid]);
    if (number === x) {
      i = mid - 1;
      count++;
      while (i >= 0 && parseInt(str[i]) === x) {
        count++;
        i--;
      }
      i = mid + 1;
      while (i < str.length && parseInt(str[i]) === x) {
        count++;
        i++;
      }
      return count;
    } else if (number > x) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return count;
}

function countUsingMod(num, x) {
  let count = 0;
  while (num > 0) {
    if (num % 10 === x) {
      count++;
    }
    num = Math.floor(num / 10);
  }
  return count;
}

function countX(L, R, X) {
  let totalCount = 0;
  for (let i = L + 1; i < R; i++) {
    totalCount += countUsingMod(i, X);
  }
  return totalCount;
}

console.log(countX(18, 81, 9));
