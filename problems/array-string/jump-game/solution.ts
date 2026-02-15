/**
 * Problem: Jump Game
 * Difficulty: Medium
 * LeetCode: https://leetcode.com/problems/jump-game/
 */

// function canJump(nums: number[]): boolean {
//     if (nums.length === 1) return true
//     for (let i = 0; i < nums.length; i++) {
//         const n = nums[i];
//         if (n >= nums.length - i - 1) return true
//         if (n === 0 && i !== nums.length - 1) {
//             const sliceArray = nums.slice(0, i);
//             const check = sliceArray.every((item, subIndex) => {
//                 return item <= sliceArray.length - subIndex
//             });
//             if (check) return false
//         }
//     }
//     return true;
// };

function canJump(nums: number[]): boolean {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false
        const reach = nums[i] + i;
        maxReach = Math.max(maxReach, reach);
        if (maxReach >= nums.length - 1) return true
    }
    return false

};

// Test cases
function runTests() {
  
  // // Test case 1
  // const test1 = canJump([2,3,1,1,4]); // true
  // console.log('Test 1:', test1);
  
  // // Test case 2
  // const test2 = canJump([3, 2, 1, 0, 4]); // false
  // console.log('Test 2:', test2);

  // // Test case 3
  // const test3 = canJump([1, 3, 2, 0, 0, 2, 6]); // false
  // console.log('Test 3:', test3);

  // Test case 4
  // const test4 = canJump([3,0,0,0]); // true
  // console.log('Test 4:', test4);

  // Test case 5
  const test5 = canJump([4, 2, 0, 0, 1, 1, 4, 4, 4, 0, 4, 0]); // true
  console.log('Test 4:', test5);
  
  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { canJump };
