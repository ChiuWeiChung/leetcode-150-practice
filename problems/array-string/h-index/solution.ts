/**
 * Problem: H-Index
 * Difficulty: Medium
 * LeetCode: https://leetcode.com/problems/h-index/
 */

function hIndex(citations: number[]): number {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) {
      return i;
    }
  }
  return citations.length;
}

// Test cases
function runTests() {
  console.log('Running test cases for: H-Index');

  // Test case 1
  const test1 = hIndex([3, 0, 6, 1, 5]); // 3
  console.log('Test 1:', test1);

  // Test case 2
  const test2 = hIndex([1, 3, 1]); // 1
  console.log('Test 2:', test2);

  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { hIndex };
