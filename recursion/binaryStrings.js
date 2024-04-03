function binaryString(n, str = "", i = 0, res = []) {
  if (i === n) {
    if (str.length === n) res.push(str);
    return res;
  }
  str += "0";
  binaryString(n, str, i + 1, res);
  str = str.slice(0, -1);
  if (str[str.length - 1] !== "1") str += "1";
  binaryString(n, str, i + 1, res);
  return res;
}

//console.log(binaryString(2));

function generatePara(n, close = 0, open = 0, str = "", i = 0, res = []) {
  if (i === 2 * n) {
    if (open === n && close === n) res.push(str);
    return;
  }

  str += "(";
  generatePara(n, close, open + 1, str, i + 1, res);
  str = str.slice(0, -1);
  if (open > close) {
    str += ")";
    close += 1;
  }
  generatePara(n, close, open, str, i + 1, res);
  return res;
}

generatePara(3);
