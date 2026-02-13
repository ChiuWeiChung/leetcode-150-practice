/**
 * Problem: Word Pattern
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/word-pattern/
 */

function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");
  const patternToWords = new Map();
  const wordsToPattern = new Map();
  if (words.length !== pattern.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const w = words[i];
    if (patternToWords.has(p) && patternToWords.get(p) !== w) return false;
    if (wordsToPattern.has(w) && wordsToPattern.get(w) !== p) return false;

    patternToWords.set(p, w);
    wordsToPattern.set(w, p);
  }

  return true;
}

// Test cases
function runTests() {
  // // Test case 1
  // const test1 = wordPattern("abba", "dog cat cat dog");
  // console.log("Test 1:", test1);

  // // Test case 2
  // const test2 = wordPattern("abba", "dog cat cat fish");
  // console.log("Test 2:", test2);

  // // Test case 3
  // const test3 = wordPattern("aaaa", "dog cat cat dog");
  // console.log("Test 3:", test3);

  // Test case 4
  const test4 = wordPattern("abba", "dog constructor constructor dog");
  console.log("Test 4:", test4);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { wordPattern };
