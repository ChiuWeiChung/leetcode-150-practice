# Contains Duplicate II

**Difficulty:** Easy  
**LeetCode:** [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)  
**Topic:** Hashmap

## Problem Description

Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

Example 1:

```bash
Input: nums = [1,2,3,1], k = 3
Output: true
```

Example 2:

```bash
Input: nums = [1,0,1,1], k = 1
Output: true
```

Example 3:

```bash
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

Constraints:

- 1 <= nums.length <= $10^5$
- -$10^9$ <= nums[i] <= $10^9$
- 0 <= k <= $10^5$

## Solution

```ts
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // 在區間範圍內 (initial - end) <=k 找出兩個相同的數字
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (map.has(current)) {
      const lastIndex = map.get(current);
      const range = i - lastIndex;
      if (range <= k) return true;
    }
    map.set(current, i);
  }

  return false;
}
```

### 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(n)

現在的 `Map<值, 最後出現的 index>` ，透過單趟掃描，遇到重複值就檢查距離 i - lastIndex <= k，成立直接回 true，否則更新最後位置。

不過有一個同樣是 O(n) 的寫法，概念更「貼題」：Sliding Window + Set（窗口大小固定最多 k）。只要維護「最近 k 個元素」是否有重複。

## Solution 2

```ts
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const window = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    // 讓 window 永遠只保留最近 k 個元素
    if (i > k) window.delete(nums[i - k - 1]);

    if (window.has(nums[i])) return true;
    window.add(nums[i]);
  }

  return false;
}
```

我每次只看「距離現在 index 不超過 k 的那段範圍」，把它當成一個小窗口。新數字進來前，如果窗口裡已經有它，表示兩個一樣的數字距離一定 ≤ k，直接 true；如果沒有就丟進窗口。窗口超過 k 就把最左邊那個踢掉，保持大小

### 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(n)
