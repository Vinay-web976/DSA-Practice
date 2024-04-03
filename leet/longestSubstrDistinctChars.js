function longestSubstrDistinctChars(s) {
  let length = 0;
  let freq = {};
  let i = 0,
    j = 0;

  while (j < s.length) {
    if (!freq[s[j]]) {
      freq[s[j]] = 1;
      j++;
      length = Math.max(length, j - i);
    } else {
      delete freq[s[i]];
      i++;
    }
  }

  return length;
}

console.log(longestSubstrDistinctChars("qwertyuiop"));
