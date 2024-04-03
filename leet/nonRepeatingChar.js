function nonRepeatingCharacter(s) {
  let unique = {};
  let min_index = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < s.length; i++) {
    if (unique[s[i]] === undefined) {
      unique[s[i]] = i;
    } else {
      unique[s[i]] = -1;
    }

    if (unique[s[i]] !== -1) {
      min_index = Math.min(unique[s[i]], min_index);
    }
  }

  return min_index === Number.MAX_SAFE_INTEGER ? "$" : s[min_index];
}

console.log(nonRepeatingCharacter("zxvczbtxyzvy"));
