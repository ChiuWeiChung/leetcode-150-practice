/**
 * Problem: Remove Element
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/remove-element/
 */

function removeElement(nums: number[], val: number): void {
  // TODO: Implement solution
  // let i = nums.length-1;
  const newNums = [...nums] as (number | string)[];

  newNums.forEach((num, idx, acc) => {
    if (num === val) acc[idx] = "-";
  });

  let i = newNums.length - 1;
  let j = 0;
  while (i >= 0) {
    console.log("newNums", newNums);
    if (newNums[j] === "_") {
      if (newNums[i] !== "_") {
        [newNums[i], newNums[j]] = [newNums[j], newNums[i]];
        j++;
      }
      i--;
    }
  }

  // console.log(newNums);
}

// Test cases
function runTests() {
  console.log("Running test cases for: Remove Element");

  // Test case 1
  const test1 = removeElement([3, 2, 2, 3], 3);
  console.log("Test 1:", test1);

  // Test case 2
  // const test2 = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
  // console.log("Test 2:", test2);

  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { removeElement };
