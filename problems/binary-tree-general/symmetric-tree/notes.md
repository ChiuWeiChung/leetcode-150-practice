# Symmetric Tree

**Difficulty:** Easy  
**LeetCode:** [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)  
**Topic:** Binary Tree General

## Problem Description

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Constraints:

- The number of nodes in the tree is in the range `[1, 1000]`.
- -100 <= Node.val <= 100

## Solution 1 (Naive)

```ts
```

上面的解法來看，我當初的核心做法其實是「把左子樹整棵反轉成鏡像，然後把左右子樹各自用 DFS 序列化成陣列，最後比對兩個陣列是否完全相同」。

但它不是最優，主要有三個問題：
1. 它會 in-place 改樹。
2. 把整棵子樹序列化成陣列再比對，其實是「先做完再驗收」，中途只要某個位置不對也得先走到那裡（雖然最後比對能提早停，但序列化本身已經做完不少）。
3. 額外用了兩個陣列，空間成本比較高。

## Solution 2

```ts
function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;

    // 直接比「鏡像對稱」的兩棵子樹
    const isMirror = (a: TreeNode | null, b: TreeNode | null): boolean => {
        if (!a && !b) return true;
        if (!a || !b) return false;
        if (a.val !== b.val) return false;
        return isMirror(a.left, b.right) && isMirror(a.right, b.left);
    };

    return isMirror(root.left, root.right);
}

```

對稱的本質是：左子樹的左邊，要等於右子樹的右邊；左子樹的右邊，要等於右子樹的左邊。也就是一路成對比較，不需要反轉，也不需要序列化。

### 複雜度分析
- **時間複雜度：** O(n)，每個節點最多被比較一次。
- **空間複雜度：** O(h)，遞迴呼叫堆疊深度是樹高 h（最壞退化成鏈狀是 O(n)，平衡樹大約 O(log n)）。
