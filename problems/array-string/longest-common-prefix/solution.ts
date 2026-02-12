/**
 * Problem: Longest Common Prefix
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/longest-common-prefix/
 */

function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0] ?? "";
  for (let i = 1; i < strs.length && prefix; i++) {
    const str = strs[i];
    const loops = Math.min(str.length, prefix.length);
    let j = 0;
    while (j < loops && str[j] === prefix[j]) j++;
    prefix = str.slice(0, j);
  }
  return prefix;
}

// Test cases
function runTests() {
  // Test case 1
  const test1 = longestCommonPrefix(["flower", "flow", "flight"]);
  console.log("Test 1:", test1);

  // Test case 2
  const test2 = longestCommonPrefix(["dog", "racecar", "car"]);
  console.log("Test 2:", test2);

  // Test case 3
  const test3 = longestCommonPrefix(["cir", "car"]);
  console.log("Test 3:", test3);

  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { longestCommonPrefix };
