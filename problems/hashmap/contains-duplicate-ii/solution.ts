/**
 * Problem: Contains Duplicate II
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/contains-duplicate-ii/
 */

// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//   // 在區間範圍內 (initial - end) <=k 找出兩個相同的數字
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const current = nums[i];
//     if (map.has(current)) {
//       const lastIndex = map.get(current);
//       const range = i - lastIndex;
//       if (range <= k) return true;
//     }
//     map.set(current, i);
//   }

//   return false;
// }

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const window = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    // 讓 window 永遠只保留最近 k 個元素
    if (i > k) window.delete(nums[i - k - 1]);

    if (window.has(nums[i])) return true;
    window.add(nums[i]);
  }

  return false;
}

// Test cases
function runTests() {
  // Test case 1
  const test1 = containsNearbyDuplicate([1, 2, 3, 1], 3);
  console.log("Test 1:", test1);

  // Test case 2
  const test2 = containsNearbyDuplicate([1, 0, 1, 1], 1);
  console.log("Test 2:", test2);

  // Test case 3
  const test3 = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
  console.log("Test 3:", test3);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { containsNearbyDuplicate };
