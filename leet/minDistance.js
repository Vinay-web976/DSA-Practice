function minDist(a, n, x, y) {
  let min = Number.MAX_SAFE_INTEGER;
  let prevIndex = -1;

  for (let i = 0; i < n; i++) {
    if (a[i] === x || a[i] === y) {
      if (prevIndex !== -1 && a[i] !== a[prevIndex]) {
        min = Math.min(min, i - prevIndex);
      }
      prevIndex = i;
    }
  }
  return min === Number.MAX_SAFE_INTEGER ? -1 : min;
}

console.log(minDist([1, 2, 3, 2], 4, 2, 1));
