import { rotateArray } from "../src/006RotateArray.js";

describe("Given an integer array nums, rotate the array to the right by k steps, where k is non-negative", () => {
  test("rotate array 1 step to the right", () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 1)).toEqual([
      7, 1, 2, 3, 4, 5, 6,
    ]);
  });
  test("provide 0 steps to array, return unchanged array", () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 0)).toEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });
  test("rotate array 2 step to the right", () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([
      6, 7, 1, 2, 3, 4, 5,
    ]);
  });
});
