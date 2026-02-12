/**
 * Problem: Majority Element
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/majority-element/
 */

// function majorityElement(nums: number[]): number {
//   const obj: Record<string, number> = {};

//   nums.forEach((num) => {
//     if (!obj[num]) obj[num] = 1;
//     else obj[num]++;
//   });

//   let max: undefined | string = undefined;
//   Object.keys(obj).forEach((key) => {
//     if (!max) max = key;
//     else {
//       if (obj[max] < obj[key]) max = key;
//     }
//   });

//   return Number(max);
// }

function majorityElement(nums: number[]): number {
  let candidate = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) count++;
    else count--;
  }

  return candidate;
}

// Test cases
function runTests() {
  console.log("Running test cases for: Majority Element");

  // Test case 1
  const test1 = majorityElement([3, 2, 3]);
  console.log("Test 1:", test1);

  // Test case 2
  const test2 = majorityElement([2, 2, 1, 1, 1, 2, 2]);
  console.log("Test 2:", test2);

  // Test case 3
  const test3 = majorityElement([3, 3, 4]);
  console.log("Test 3:", test3);

  // Test case 4
  const test4 = majorityElement([6, 5, 5]);
  console.log("Test 4:", test4);

  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { majorityElement };
