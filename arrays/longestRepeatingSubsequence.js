function characterReplacement(s, k) {
  let res = 0;
  let l = 0;
  let countMap = new Map();

  for (let r = 0; r < s.length; r++) {
    let len = r - l + 1;
    countMap.set(s[r], 1 + (countMap.get(s[r]) || 0));

    if (len - Math.max(...countMap.values()) > k) {
      countMap.set(s[l], countMap.get(s[l]) - 1);
      l++;
    }
    len = r - l + 1;
    res = Math.max(len, res);
  }
  return res;
}

console.log(characterReplacement("AABABBA", 1));
