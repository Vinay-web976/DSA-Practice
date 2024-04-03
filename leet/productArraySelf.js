function productArraySelf(nums, n) {
  let totalProd = 1;
  let isZeroPresent = false;
  let result = new Array(n);
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) isZeroPresent = true;
    else totalProd *= nums[i];
  }

  for (let i = 0; i < n; i++) {
    if (isZeroPresent) result[i] = nums[i] === 0 ? totalProd : 0;
    else {
      result[i] = totalProd / nums[i];
    }
  }

  return result;
}

function productArraySelfGPT(nums, n) {
  let result = new Array(n).fill(1);

  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < n; i++) {
    result[i] *= leftProduct;
    leftProduct *= nums[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

console.log(productArraySelfGPT([10, 3, 5, 6, 2], 5));
