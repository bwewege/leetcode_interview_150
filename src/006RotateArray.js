export function rotateArray(nums, k) {
  if (k === 0) {
    return nums;
  } else {
    for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
    }
    return nums;
  }
}
