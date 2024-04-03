function letterCombinations(digits) {}

function printCombinations(first, ind = 0, res = [], temp = "") {
  if (ind === first.length && temp.length === 2) {
    console.log(temp);
    return;
  }
  for (let i = ind; i < first.length; i++) {
    printCombinations(first, i + 1, res, temp + first[i]);
  }

  return res;
}

printCombinations("abcdef");
