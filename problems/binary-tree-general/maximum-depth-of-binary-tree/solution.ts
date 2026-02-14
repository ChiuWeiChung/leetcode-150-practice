/**
 * Problem: Maximum Depth of Binary Tree
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

function maxDepth(root: TreeNode | null): number {
  function recursive(node: TreeNode | null, depth: number): number {
    if (!node) return depth;
    depth++;
    const leftDepth = recursive(node.left, depth);
    const rightDepth = recursive(node.right, depth);
    return Math.max(leftDepth, rightDepth);
  }
  return recursive(root, 0);
}

// Test cases
function runTests() {
  console.log('Running test cases for: Maximum Depth of Binary Tree');

  // Test case 1
  const test1 = maxDepth(/* Add test input */);
  console.log('Test 1:', test1);

  // Test case 2
  const test2 = maxDepth(/* Add test input */);
  console.log('Test 2:', test2);

  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { maxDepth };
