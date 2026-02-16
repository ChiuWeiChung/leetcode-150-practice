/**
 * Problem: Find the Index of the First Occurrence in a String
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */

// function strStr(haystack: string, needle: string): number {
//   let i = 0;
//   let j = 0;

//   while (i < haystack.length && j < needle.length) {
//     if (haystack[i] === needle[j]) {
//       j++;
//     } else {
//       i-= j;
//       j = 0;
//     }
//     i++;
//   }

//   return j !== needle.length ? -1 : i-needle.length;
// }

function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

// Test cases
function runTests() {
  // Test case 1
  const test1 = strStr('sadbutsad', 'sad');
  console.log('Test 1:', test1);

  // Test case 2
  const test2 = strStr('leetcode', 'leeto');
  console.log('Test 2:', test2);

  // Test case 3
  const test3 = strStr('hakunamatata', 'nama');
  console.log('Test 3:', test3);

  // Test case 4
  const test4 = strStr('a', 'a');
  console.log('Test 4:', test4);

  // Test case 5
  const test5 = strStr('mississippi', 'issip');
  console.log('Test 5:', test5);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { strStr };
