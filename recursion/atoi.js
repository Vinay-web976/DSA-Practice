function atoi(str, i = 0, res = "", sign = "") {
  if (i >= str.length || isNaN(str[i])) {
    res = Number(sign === "-" ? sign + res : +res);
    if (sign === "-") {
      return res <= -Math.pow(2, 31) ? -Math.pow(2, 31) : res;
    } else {
      return res >= Math.pow(2, 31) ? Math.pow(2, 31) : res;
    }
  }

  res += str[i];
  return atoi(str, i + 1, res, sign);
}

var myAtoi = function (s) {
  let i = 0;
  let sign = "";
  while (i < n && s[i] === " ") i++;
  if (s[i] === "-" || s[i] === "+") {
    sign = s[i];
    i++;
  }

  return atoi(s, i, "", sign);
};

console.log(atoi("   +0 123"));
