/**
 * Problem: Jump Game II
 * Difficulty: Medium
 * LeetCode: https://leetcode.com/problems/jump-game-ii/
 */

function jump(nums: number[]): number {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    // 走到目前 jump 的邊界
    if (i === currentEnd) {
      console.log('i', i, 'currentEnd', currentEnd, 'farthest', farthest)
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
}


// Test cases
function runTests() {
  console.log('Running test cases for: Jump Game II');

  // // Test case 1
  // const test1 = jump([2, 3, 1, 1, 4]); // 2
  // console.log('Test 1:', test1);

  // // Test case 2
  // const test2 = jump([2, 3, 0, 1, 4]); // 2
  // console.log('Test 2:', test2);

  // Test case 3
  const test3 = jump([5, 4, 0, 1, 4, 1, 1, 1, 1, 4]); // 3
  console.log('Test 3:', test3);

  //  i
  // [5, 4, 0, 1, 4, 1, 1, 1, 1, 4]
  //                 ^  (jump =1; currentEnd =5 ; farthest =5)
  //     i
  // [5, 4, 0, 1, 4, 1, 1, 1, 1, 4]
  //                 ^  (jump =1; currentEnd =5; farthest =5)
  //       .
  //       .
  //              i
  // [5, 4, 0, 1, 4, 1, 1, 1, 1, 4]
  //                 ^  (jump =1; currentEnd =5; farthest =8)
  //                 i
  // [5, 4, 0, 1, 4, 1, 1, 1, 1, 4]
  //                          ^  (jump =2; currentEnd =8; farthest =8)
  //       .
  //       .
  //                          i
  // [5, 4, 0, 1, 4, 1, 1, 1, 1, 4]
  //                          ^  (jump =2; currentEnd =9; farthest =9)
  //                             i
  // [5, 4, 0, 1, 4, 1, 1, 1, 1, 4]
  //                             ^  (jump =3; currentEnd =9; farthest =9)
  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { jump };
