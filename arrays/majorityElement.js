function majority(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = freq[arr[i]] + 1 || 1;
    if (freq[arr[i]] > Math.floor(arr.length / 2)) return arr[i];
  }
  return null;
}

//console.log(majority([8, 7, 6, 8, 6, 6, 6, 5]));

function majaorityMooreAlgo(arr) {
  let majority = arr[0];
  let votes = 1;
  for (let i = 1; i < arr.length; i++) {
    if (votes === 0) {
      majority = arr[i];
      votes++;
    } else if (majority === arr[i]) votes++;
    else votes--;
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] === majority) count++;

  if (count > Math.floor(arr.length / 2)) return majority;
  else return null;
}

console.log(majaorityMooreAlgo([8, 7, 6, 8, 6, 6, 6, 6]));
