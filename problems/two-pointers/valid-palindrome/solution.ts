/**
 * Problem: Valid Palindrome
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/valid-palindrome/
 */

function isPalindrome(s: string): boolean {
  const isAlphanumeric = (ch: string) => /[a-z0-9]/i.test(ch);

  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    while (i < j && !isAlphanumeric(s[i])) i++;
    while (i < j && !isAlphanumeric(s[j])) j--;

    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    i++;
    j--;
  }

  return true;
};

// Test cases
function runTests() {
  // Test case 1
  const test1 = isPalindrome('A man, a plan, a canal: Panama');
  console.log('Test 1:', test1);

  // // Test case 2
  const test2 = isPalindrome('race a car');
  console.log('Test 2:', test2);

  // // Test case 3
  const test3 = isPalindrome(' ');
  console.log('Test 3:', test3);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { isPalindrome };
