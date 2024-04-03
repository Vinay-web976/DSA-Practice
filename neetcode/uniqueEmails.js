function numUniqueEmails(emails) {
  let isVisited = new Set();
  let count = 0;
  for (let i = 0; i < emails.length; i++) {
    let temp = [];
    let str = emails[i];
    let j = 0;
    let domain = str.split("@")[1];
    while (str[j] !== "+" && str[j] !== "@") {
      if (str[j] !== ".") {
        temp.push(str[j]);
      }
      j++;
    }
    temp.push(`@${domain}`);

    let transformedEmail = temp.join("");
    if (!isVisited.has(transformedEmail)) {
      count++;
      isVisited.add(transformedEmail);
    }
  }
  return count;
}

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.email.leet+alex@code.com",
  ])
);

function isIsomorphic(s, t) {
  let sMap = {};
  let tMap = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]] || tMap[t[i]]) {
      if (sMap[s[i]] !== t[i]) return false;
    } else {
      sMap[s[i]] = t[i];
      tMap[t[i]] = s[i];
    }
  }
  return true;
}

console.log(isIsomorphic("egg", "add"));
