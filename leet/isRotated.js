function isRotated(str1, str2) {
  let rotated1 = str1.slice(2, str1.length) + str1.slice(0, 2);
  let rotated2 = str1.slice(str1.length - 2) + str1.slice(0, str1.length - 2);

  return rotated1 === str2 || rotated2 === str2;
}

console.log(isRotated("amazon", "azonam"));