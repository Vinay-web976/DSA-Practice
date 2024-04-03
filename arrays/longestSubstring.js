function longestSubstringNoRepeat(s) {
  let i = 0;
  let j = 1;
  let res = 0;
  let count = 0;
  let countArr = new Array(26).fill(0);
  while (j < s.length) {
    let asci = s.charCodeAt(j) - 97;
    if (s[j] !== s[i] && countArr[asci] === 0) {
      countArr[asci]++;
      count++;
      j++;
    } else {
      i++;
      j = i + 1;
      res = Math.max(res, count + 1);
      count = 0;
      countArr = new Array(26).fill(0);
    }
  }
  if (count > 0) return Math.max(res, count + 1);
  return res;
}

//console.log(longestSubstringNoRepeat("pwwkew"));

function longestSubstringNoRepeatOptimized(s) {
  let i = 0;
  let j = 0;
  let res = 0;
  let count = 0;
  let resSet = new Set();
  if (s.length === 1) return 1;
  while (j < s.length) {
    if (!resSet.has(s[j])) {
      resSet.add(s[j]);
      count++;
      j++;
    } else {
      res = Math.max(res, count);
      while (resSet.has(s[j])) {
        resSet.delete(s[i]);
        count--;
        i++;
      }
    }
  }

  return res;
}

console.log(longestSubstringNoRepeatOptimized("pwwkew"));
