# Maximum Depth of Binary Tree

**Difficulty:** Easy  
**LeetCode:** [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)  
**Topic:** Binary Tree General

## Problem Description

Given the `root` of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the `root` node down to the farthest leaf node.


Example 1:

```text
      3
     / \
    9  20
      /  \
     15   7
```

```bash
Input: root = [3,9,20,null,null,15,7]
Output: 3
```


Example 2:

```bash
Input: root = [1,null,2]
Output: 2
```

Constraints:

- The number of nodes in the tree is in the range [0, $10^4$].
- -100 <= Node.val <= 100

## Solution


```ts
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

function maxDepth(root: TreeNode | null): number {

  function recursive(node: TreeNode | null, depth: number):number {
    if (!node) return depth;
    depth++;
    const leftDepth = recursive(node.left, depth);
    const rightDepth = recursive(node.right, depth);
    return Math.max(leftDepth, rightDepth);
  }
  return recursive(root,0)
}
```

## 底層邏輯

其實就是 用 DFS（Depth First Search）一路往下走，把目前走到的深度帶著走，最後回傳左右子樹中比較深的那一條路徑。

從底層邏輯來看，recursive(node, depth) 可以理解成：「目前走到這個節點時，深度是多少」。每次進到下一層節點時就把 depth++，代表往下多走了一層。當遇到 null 時，表示已經走到底（超過葉節點），這時直接回傳目前累積的深度。因為一棵樹可能左邊比較深，也可能右邊比較深，所以分別遞迴計算 leftDepth 與 rightDepth，最後用 Math.max() 取較大的值，就是整棵樹的最大深度。

## 複雜度分析

- **時間複雜度:** O(n)
  - 每個節點最多被訪問一次，n 是樹的節點數量。
- **空間複雜度:** O(n)
  - 來自遞迴呼叫堆疊（call stack），h 是樹的高度。最好的情況（平衡樹）大約是 O(log n)，最差情況（退化成鏈表）會是 O(n)。
