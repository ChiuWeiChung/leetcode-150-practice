/**
 * Problem: Merge Sorted Array
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/merge-sorted-array/
 */

function mergeSortedArray(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
) {
  // TODO: Implement solution
  // const m = nums1.filter((num) => num !== 0).length; // nums1 的有效元素數量
  // const n = nums2.length;

  let i = m - 1; // nums1 的最後一個元素
  let j = n - 1; // nums2 的最後一個元素
  let k = m + n - 1; // 最後陣列（答案）的最後一個元素

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  console.log("Merged Array:", nums1);
}

// Test cases
function runTests() {
  console.log("Running test cases for: Merge Sorted Array");

  // Test case 1
  const test1 = mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

  // Test case 2
  const test2 = mergeSortedArray([1], 1, [], 0);

  const test3 = mergeSortedArray([0], 0, [1], 1);

  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { mergeSortedArray };
