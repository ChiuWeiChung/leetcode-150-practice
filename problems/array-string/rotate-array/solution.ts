/**
 * Problem: Rotate Array
 * Difficulty: Medium
 * LeetCode: https://leetcode.com/problems/rotate-array/
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;

  function reverse(left: number, right: number) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
}

// Test cases
function runTests() {
  // Test case 1
  const test1 = rotate([1, 2, 3, 4, 5, 6, 7], 3);
  console.log('Test 1:', test1);

  // // Test case 2
  // const test2 = rotate([-1, -100, 3, 99], 2);
  // console.log('Test 2:', test2);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { rotate };
