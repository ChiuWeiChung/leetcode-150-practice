/**
 * Problem: Two Sum
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/two-sum/
 */

function twoSum(nums: number[], target: number): number[] {
  const needMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (needMap.has(need)) return [needMap.get(need), i];
    needMap.set(nums[i], i);
  }
  return [];
}

// Test cases
function runTests() {
  // Test case 1
  const test1 = twoSum([2, 7, 11, 15], 9);
  console.log("Test 1:", test1);

  // Test case 2
  const test2 = twoSum([3, 2, 4], 6);
  console.log("Test 2:", test2);

  // Test case 3
  const test3 = twoSum([3, 3], 6);
  console.log("Test 3:", test3);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { twoSum };
