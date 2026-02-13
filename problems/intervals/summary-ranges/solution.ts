/**
 * Problem: Summary Ranges
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/summary-ranges/
 */

// function summaryRanges(nums: number[]): string[] {
//   if (!nums.length) return [];
//   let i = 0;
//   let initial = nums[i];
//   const answer = [[initial]];
//   for (let j = 1; j < nums.length; j++) {
//     const current = nums[j];
//     if (initial + 1 === current) {
//       answer[i].push(current);
//     } else {
//       i++;
//       answer[i] = [current];
//     }
//     initial = current;
//   }

//   const final = answer.map((arr) => {
//     const first = String(arr[0]);
//     let last = '';
//     if (arr.length > 1) last = String(arr.at(-1));
//     return last ? `${first}->${last}` : first;
//   });
//   return final;
// }

function summaryRanges(nums: number[]): string[] {
  const res: string[] = [];
  const n = nums.length;
  if (n === 0) return res;

  let start = nums[0];

  for (let i = 1; i <= n; i++) {
    // i === n 表示走到尾巴了，強制把最後一段結算
    if (i === n || nums[i] !== nums[i - 1] + 1) {
      const end = nums[i - 1];
      res.push(start === end ? `${start}` : `${start}->${end}`);
      if (i < n) start = nums[i];
    }
  }

  return res;
}


// Test cases
function runTests() {
  // Test case 1
  const test1 = summaryRanges([0, 1, 2, 4, 5, 7]);
  console.log('Test 1:', test1); // ["0->2","4->5","7"]

  // Test case 2
  const test2 = summaryRanges([0, 2, 3, 4, 6, 8, 9]);
  console.log('Test 2:', test2); // ["0","2->4","6","8->9"]
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { summaryRanges };
