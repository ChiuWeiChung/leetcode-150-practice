/**
 * Problem: Is Subsequence
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/is-subsequence/
 */

function isSubsequence(s: string, t: string): boolean {
    if (!s.length) return true
    if (t.length < s.length) return false;

    let sIndex = 0;
    let tIndex = 0;

    while (tIndex < t.length) {

        if (s[sIndex] === t[tIndex]) {
            sIndex++
            if (sIndex === s.length) return true; // 提早結束
        }
        tIndex++
    }

    return sIndex === s.length

};

// Test cases
function runTests() {
  console.log('Running test cases for: Is Subsequence');
  
  // Test case 1
  const test1 = isSubsequence('abc', 'ahbgdc');
  console.log('Test 1:', test1);
  
  // Test case 2
  const test2 = isSubsequence('axc', 'ahbgdc');
  console.log('Test 2:', test2);

  // Test case 3
  const test3 = isSubsequence('bb', 'ahbgdc');
  console.log('Test 3:', test3);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { isSubsequence };
