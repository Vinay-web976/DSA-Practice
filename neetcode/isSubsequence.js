function isSubsequence(s, t) {
  let i = 0;
  for (j = 0; i < s.length && j < t.length; j++) {
    if (s[i] === t[j]) {
      i++;
    }
  }
  return i === s.length;
}

console.log(isSubsequence("abc", "adfdsfbds"));
