function areIsomorphic(str1, str2) {
  let alphaMap = {};
  let mapped = {};
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    if (alphaMap[str1[i]] !== undefined) {
      if (alphaMap[str1[i]] !== str2[i]) {
        return false;
      }
    } else {
      if (!mapped[str2[i]]) {
        alphaMap[str1[i]] = str2[i];
        mapped[str2[i]] = 1;
      } else {
        return false;
      }
    }
  }
  return true;
}

function areIsomorphicGPT(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const map1 = {};
  const map2 = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    if (
      (map1[char1] && map1[char1] !== char2) ||
      (map2[char2] && map2[char2] !== char1)
    ) {
      return false; // Mapping conflict
    }

    map1[char1] = char2;
    map2[char2] = char1;
  }

  return true;
}

console.log(areIsomorphic("pijthbsfy", "fvladzpbf"));
