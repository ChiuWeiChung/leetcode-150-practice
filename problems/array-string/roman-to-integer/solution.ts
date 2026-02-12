/**
 * Problem: Roman to Integer
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/roman-to-integer/
 */

function romanToInt(s: string): number {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (s.length === 1) return romanMap[s as keyof typeof romanMap];

  let nextKey = s[s.length - 1] as keyof typeof romanMap;
  let sum = romanMap[nextKey];

  for (let i = s.length - 2; i >= 0; i--) {
    const curKey = s[i] as keyof typeof romanMap;
    // 如果 romanMap[nextKey] > romanMap[curKey] 代表是減法
    if (romanMap[nextKey] > romanMap[curKey]) sum -= romanMap[curKey];
    else sum += romanMap[curKey];
    nextKey = curKey;
  }
  return sum;
}

// Test cases
function runTests() {
  console.log("Running test cases for: Roman to Integer");

  // Test case 1
  const test1 = romanToInt("III");
  console.log("Test 1:", test1);

  // Test case 2
  const test2 = romanToInt("LVIII");
  console.log("Test 2:", test2);

  // Test case 3
  const test3 = romanToInt("MCMXCIV");
  console.log("Test 3:", test3);

  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { romanToInt };
