/**
 * Problem: Invert Binary Tree
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/invert-binary-tree/
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function invertTree(root: TreeNode | null): TreeNode | null {
  function invertRecursive(node: TreeNode | null) {
    if (node) {
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
      invertRecursive(node.left);
      invertRecursive(node.right);
    }
  }

  invertRecursive(root);
  return root;
};

// Test cases
function runTests() {
  console.log('Running test cases for: Invert Binary Tree');
  
  // Test case 1
  const test1 = invertTree(/* Add test input */);
  console.log('Test 1:', test1);
  
  // Test case 2
  const test2 = invertTree(/* Add test input */);
  console.log('Test 2:', test2);
  
  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { invertTree };
