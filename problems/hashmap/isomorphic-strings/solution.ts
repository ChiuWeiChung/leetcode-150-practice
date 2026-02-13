/**
 * Problem: Isomorphic Strings
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/isomorphic-strings/
 */

// function isIsomorphic(s: string, t: string): boolean {
//   const sToT: Record<string, string> = {};
//   const tToS: Record<string, string> = {};
//   for (let i = 0; i < s.length; i++) {
//     const a = s[i];
//     const b = t[i];
//     if (!sToT[a]) {
//       sToT[a] = b;
//       if (!tToS[sToT[a]]) tToS[sToT[a]] = a;
//       else if (tToS[sToT[a]] !== a) return false;
//     } else if (sToT[a] !== b) return false;
//   }

//   return true;
// }

function isIsomorphic(s: string, t: string): boolean {
  const sToT: Record<string, string> = {};
  const tToS: Record<string, string> = {};
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    const b = t[i];

    const mappedB = sToT[a];
    const mappedA = tToS[b];

    if (mappedB && mappedB !== b) return false;
    if (mappedA && mappedA !== a) return false;

    sToT[a] = b;
    tToS[b] = a;
  }

  return true;
}

// Test cases
function runTests() {
  // Test case 1
  const test1 = isIsomorphic("egg", "add"); // true
  console.log("Test 1:", test1);

  // Test case 2
  const test2 = isIsomorphic("foo", "bar"); // false
  console.log("Test 2:", test2);

  // Test case 3
  const test3 = isIsomorphic("paper", "title"); // true
  console.log("Test 3:", test3);

  // Test case 4
  const test4 = isIsomorphic("f11", "b23"); // false
  console.log("Test 4:", test4);

  // Test case 5
  const test5 = isIsomorphic("badc", "baba"); // false
  console.log("Test 5:", test5);

  // Test case 6
  const test6 = isIsomorphic("egcd", "adfd"); // false
  console.log("Test 6:", test6);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { isIsomorphic };
