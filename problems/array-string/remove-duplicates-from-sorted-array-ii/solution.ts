/**
 * Problem: Remove Duplicates from Sorted Array II
 * Difficulty: Medium
 * LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */

function removeDuplicates(nums: number[]): number {
  if(nums.length<=2) return nums.length

  let k =2;

  for(let i=2; i<nums.length; i++){
    if(nums[k-2]!==nums[i]){
      nums[k]= nums[i];
      k++
    }
  }
  console.log('nums', nums);
  return k
}

// Test cases
function runTests() {
  // Test case 1
  const test1 = removeDuplicates([1, 1, 1, 2, 2, 3]);
  console.log('Test 1:', test1);

  // // // Test case 2
  const test2 = removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
  console.log('Test 2:', test2);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { removeDuplicates };
