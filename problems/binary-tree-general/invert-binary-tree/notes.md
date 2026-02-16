# Invert Binary Tree

**Difficulty:** Easy  
**LeetCode:** [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)  
**Topic:** Binary Tree General

## Problem Description

Given the `root` of a binary tree, invert the tree, and return its root.

Example 1:

```bash
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```

Example 2:

```bash
Input: root = [2,1,3]
Output: [2,3,1]
```

Example 3:

```bash
Input: root = []
```
Output: []

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

function invertTree(root: TreeNode | null): TreeNode | null {
    function invertRecursive(node: TreeNode | null) {
        if (node) {
            let temp = node.left
            node.left = node.right
            node.right = temp
            invertRecursive(node.left);
            invertRecursive(node.right);
        }
    }

    invertRecursive(root);
    return root
};
```

## 底層邏輯

這題的核心想法其實很直覺：每走到一個節點，就把左右子樹互換，然後再繼續處理下一層。目前的寫法是 DFS（Depth-First Search）做法。

程式一開始從 root 進入 invertRecursive。每當遞迴走到一個節點時，先做一件很單純的事：暫存左子節點，接著把右子節點移到左邊，再把原本左邊放到右邊。這一步完成後，當前節點的反轉就結束了。接下來再分別對新的左子樹與右子樹重複相同動作。因為每個節點都會經歷同樣的流程，所以整棵樹會被逐層翻轉，最後形成鏡像結果。



## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(h) 其中 h 是樹的高度
  - 空間複雜度主要來自遞迴呼叫堆疊。最好的情況下，如果樹是平衡的，高度約為 log n，遞迴深度也就是 O(log n)；但如果樹退化成像 linked list 那樣的結構，最壞情況下遞迴深度會變成 O(n)。


