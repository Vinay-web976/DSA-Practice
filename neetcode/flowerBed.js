function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (
        (i === 0 && flowerbed[i + 1] === 0) ||
        (i === flowerbed.length - 1 && flowerbed[i - 1] === 0)
      ) {
        flowerbed[i] = 1;
        count++;
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }

  return count >= n;
}

function canPlace(flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n !== 0; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n === 0;
}

console.log(canPlace([1, 0, 0, 0, 1], 2));
