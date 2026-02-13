/**
 * Problem: Valid Anagram
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/valid-anagram/
 */

// function isAnagram(s: string, t: string): boolean {
//   if (s.length !== t.length) return false;
//   const sMap: Record<string, number> = {};
//   const tMap: Record<string, number> = {};

//   for (let char of s) {
//     sMap[char] = (sMap[char] ?? 0) + 1;
//   }

//   for (let char of t) {
//     tMap[char] = (tMap[char] ?? 0) + 1;
//   }

//   for (let key in sMap) {
//     if (sMap[key] !== tMap[key]) return false;
//   }

//   return true;
// }

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const countArray = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const sStr = s[i];
    const tStr = t[i];

    const sIndex = sStr.charCodeAt(0) - 97;
    const tIndex = tStr.charCodeAt(0) - 97;
    countArray[sIndex]++;
    countArray[tIndex]--;
  }
  return countArray.every((el) => el === 0);
}

// Test cases
function runTests() {
  // console.log("Running test cases for: Valid Anagram");

  // Test case 1
  const test1 = isAnagram("anagram", "nagaram");
  console.log("Test 1:", test1);

  // // Test case 2
  const test2 = isAnagram("rat", "car");
  console.log("Test 2:", test2);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { isAnagram };
