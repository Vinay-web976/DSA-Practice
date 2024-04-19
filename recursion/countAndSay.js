function countAndSay(n) {
  if (n === 1) return "1";
  return say(countAndSay(n - 1));
}

function say(numString) {
  let count = 0;
  let res = "";
  for (let i = 0; i < numString.length; i++) {
    if (i === 0 || numString[i] === numString[i - 1]) {
      count++;
    } else {
      res += count + numString[i - 1].toString();
      count = 1;
    }
  }
  if (count >= 1) res += count + numString[numString.length - 1].toString();
  return res;
}

console.log(countAndSay(5));
