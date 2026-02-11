/**
 * Problem: Remove Duplicates from Sorted Array
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0;

  let k = 1; // 下一個要寫入的位置

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// Test cases
function runTests() {
  console.log('Running test cases for: Remove Duplicates from Sorted Array');

  // Test case 1
  const test1 = removeDuplicates([1, 1, 2]);
  console.log('Test 1:', test1);

  // Test case 2
  const test2 = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
  console.log('Test 2:', test2);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { removeDuplicates };
