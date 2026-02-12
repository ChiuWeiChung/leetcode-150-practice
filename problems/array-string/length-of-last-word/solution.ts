/**
 * Problem: Length of Last Word
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/length-of-last-word/
 */

function lengthOfLastWord(s: string): number {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    if (char !== " ") {
      count++;
    } else if (count) break;
  }
  return count;
}

// Test cases
function runTests() {
  // Test case 1
  const test1 = lengthOfLastWord("Hello World");
  console.log("Test 1:", test1);

  // Test case 2
  const test2 = lengthOfLastWord("   fly me   to   the moon  ");
  console.log("Test 2:", test2);

  // Test case 3
  const test3 = lengthOfLastWord("luffy is still joyboy");
  console.log("Test 3:", test3);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { lengthOfLastWord };
