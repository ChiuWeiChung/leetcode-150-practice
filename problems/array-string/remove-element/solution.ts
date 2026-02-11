/**
 * Problem: Remove Element
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/remove-element/
 */

function removeElement(nums: number[], val: number): number {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j];
      j--;
    } else i++;
  }
  // 精髓所在，j+1 代表新 news 的長度，因为 j 是最後一個不等於 val 的元素的索引
  return j + 1;
};

// Test cases
function runTests() {
  console.log("Running test cases for: Remove Element");

  // Test case 1
  const test1 = removeElement([3, 2, 2, 3], 3);
  console.log('Test 1:', test1);

  // Test case 2
  const test2 = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
  console.log('Test 2:', test2);

  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { removeElement };
