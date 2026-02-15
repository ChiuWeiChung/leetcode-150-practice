# Same Tree

**Difficulty:** Easy  
**LeetCode:** [Same Tree](https://leetcode.com/problems/same-tree/)  
**Topic:** Binary Tree General

## Problem Description

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:

```bash
Input: p = [1,2,3], q = [1,2,3]
Output: true
```

Example 2:

```bash
Input: p = [1,2], q = [1,null,2]
Output: false
```

Example 3:

```bash
Input: p = [1,2,1], q = [1,1,2]
Output: false
```

## Solution

```ts
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

  function comparison(node1: TreeNode | null, node2: TreeNode | null): boolean {

    // 1️⃣ 兩個都沒有節點 → 相同
    if (node1 === null && node2 === null) {
      return true;
    }

    // 2️⃣ 其中一個是 null → 結構不同
    if (node1 === null || node2 === null) {
      return false;
    }

    // 3️⃣ 值不同 → 不相同
    if (node1.val !== node2.val) {
      return false;
    }

    // 4️⃣ 同時比較左右子樹
    return (
      comparison(node1.left, node2.left) &&
      comparison(node1.right, node2.right)
    );
  }

  return comparison(p, q);
}

```

## 底層邏輯

核心其實是在做「同步走訪兩棵樹」，每一步都檢查結構跟值是否一致。

解題思路可以這樣理解：把 p 跟 q 當成兩個指標，永遠成對比較同一個位置的節點。

- 兩個都空 (null)：代表這個位置兩棵樹都沒有節點，結構一致，這一段算通過，回傳 true。
- 其中一個空、另一個不空：代表結構已經不一樣了，直接回傳 false。（你現在的寫法用 node1?.val !== node2?.val 也會在這裡 fail 掉：一個是 undefined 一個是數字）
- 兩個都不空：先比 val，不一樣就 false；一樣的話，繼續同時去比左子樹、右子樹。左邊跟右邊都通過，整棵樹才算一樣。


## 複雜度分析

- **時間複雜度:** O(?)
- **空間複雜度:** O(?)
