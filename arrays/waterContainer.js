function waterContainer(height) {
  let i = 0;
  let j = height.length - 1;
  let res = 0;

  while (i < j) {
    const level = Math.min(height[i], height[j]);
    const area = (j - i) * level;
    res = Math.max(area, res);

    if (height[i] < height[j]) {
      i++;
    } else if (height[i] > height[j]) {
      j--;
    } else {
      i++;
      j--;
    }
  }
  return res;
}

console.log(waterContainer([2, 3, 4, 5, 4, 2]));
