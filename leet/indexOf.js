function findIndex(haystack, needle) {
  let pos = 0;
  let index = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[pos]) {
      pos++;
      if (pos === needle.length) {
        return index;
      }
    } else {
      i = index;
      pos = 0;
      index++;
    }
  }
  return -1;
}

console.log(findIndex("mississippi", "issip"));
