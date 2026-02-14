/**
 * Problem: Longest Consecutive Sequence
 * Difficulty: Medium
 * LeetCode: https://leetcode.com/problems/longest-consecutive-sequence/
 */

function longestConsecutive(nums: number[]): number {
  const set = new Set(nums)
  let record = 0;


  for (const n of set) {
    if (!set.has(n - 1)) {
      // 代表 n 是起點
      let current = n;
      let count = 1;
      while (set.has(current + 1)) {
        current++;
        count++;
      }
      record = Math.max(record, count);
    }
  }
  return record;
}

// Test cases
function runTests() {
  // Test case 1
  const test1 = longestConsecutive([100, 4, 200, 1, 3, 2]);
  console.log('Test 1:', test1); // 4

  // Test case 2
  const test2 = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
  console.log('Test 2:', test2); // 9

  // Test case 3
  const test3 = longestConsecutive([1, 2, 0, 1]);
  console.log('Test 3:', test3); // 3
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { longestConsecutive };
