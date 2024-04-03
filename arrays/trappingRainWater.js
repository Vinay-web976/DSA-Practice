function trappingRain(arr) {
  let maxRight = [arr[arr.length - 1]];
  let max = arr[arr.length - 1];
  let res = 0;

  for (let i = arr.length - 2; i >= 0; i--) {
    max = Math.max(arr[i], max);
    maxRight.push(max);
  }

  max = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    max = Math.max(max, arr[i]);
    let maxWater = Math.min(max, maxRight[arr.length - i - 1]);
    res += maxWater - arr[i];
  }

  return res;
}

console.log(trappingRain([3, 6, 1, 2, 5]));
