function checkInclusion(s1, s2) {
  const s1Count = new Array(26).fill(0);
  let windowCount = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) s1Count[s1.charCodeAt(i) - 97]++;

  let i = 0;
  for (let j = 0; j < s2.length; j++) {
    const charCode = s2.charCodeAt(j) - 97;
    windowCount[charCode]++;
    if (s1Count[charCode] === 0 || s1Count[charCode] < windowCount[charCode]) {
      while (i !== j) {
        windowCount[s2.charCodeAt(i) - 97]--;
        i++;
      }
    } else {
      if (JSON.stringify(s1Count) === JSON.stringify(windowCount)) return true;
    }
  }
  return false;
}

console.log(checkInclusion("ky", "ainwkckifykxlribaypk"));
