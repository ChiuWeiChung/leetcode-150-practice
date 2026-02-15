/**
 * Problem: Same Tree
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/same-tree/
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * Definition for a binary tree node.
*/
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

    function comparison(node1?: TreeNode | null, node2?: TreeNode | null):boolean {
        if (!node1 && !node2) return true
        if (node1?.val !== node2?.val) return false
        const leftCheck = comparison(node1?.left, node2?.left);
        const rightCheck = comparison(node1?.right, node2?.right);
        return leftCheck && rightCheck;
    }

    return comparison(p, q)

};

// Test cases
function runTests() {
  console.log('Running test cases for: Same Tree');
  
  // Test case 1
  const test1 = isSameTree(/* Add test input */);
  console.log('Test 1:', test1);
  
  // Test case 2
  const test2 = isSameTree(/* Add test input */);
  console.log('Test 2:', test2);
  
  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { isSameTree };
