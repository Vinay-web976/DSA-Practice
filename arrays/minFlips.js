function minFlipsRequired(arr) {
  let zeroGroup = 0;
  let oneGroup = 0;
  if (arr[0] === 0) zeroGroup++;
  else oneGroup++;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] === 0) zeroGroup++;
      else oneGroup++;
    }
  }

  return Math.min(zeroGroup, oneGroup);
}

function minFlipsRequiredEfficient(arr) {
  let groupToCheck = arr[0] === 0 ? 1 : 0;
  let startIndex = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] === groupToCheck) startIndex = i;
      else console.log(startIndex, i - 1);
    }
  }
  if (arr[arr.length - 1] === groupToCheck) {
    console.log(startIndex, arr.length - 1);
  }
}
console.log(minFlipsRequiredEfficient([0, 0, 1, 1, 0, 0, 1, 1, 1]));
