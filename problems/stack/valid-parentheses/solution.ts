/**
 * Problem: Valid Parentheses
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/valid-parentheses/
 */

function isValid(s: string): boolean {
  const obj = { '{': '}', '[': ']', '(': ')' };
  const stack: string[] = [];

  for (let str of s) {
    // 右邊開口
    if (str in obj) {
      stack.push(str);
    } else {
      // 左邊開口
      const last = obj[stack.pop() as keyof typeof obj];
      if (last !== str) return false;
    }
  }

  return stack.length === 0;
}

// Test cases
function runTests() {
  // // Test case 1
  // const test1 = isValid('()');
  // console.log('Test 1:', test1); // true

  // // // Test case 2
  // const test2 = isValid('()[]{}');
  // console.log('Test 2:', test2); // true

  // // // Test case 3
  // const test3 = isValid('(]');
  // console.log('Test 3:', test3); // false

  // // Test case 4
  // const test4 = isValid('([{}])');
  // console.log('Test 4:', test4); // true

  // // Test case 5
  // const test5 = isValid('([)]');
  // console.log('Test 5:', test5); // false

  // Test case 6
  const test6 = isValid('"(}{)"');
  console.log('Test 6:', test6); // false
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { isValid };
