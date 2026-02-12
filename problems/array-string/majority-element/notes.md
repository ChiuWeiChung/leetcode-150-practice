# Majority Element

**Difficulty:** Easy  
**LeetCode:** [Majority Element](https://leetcode.com/problems/majority-element/)  
**Topic:** Array / String

## Problem Description

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

Example 1:

```bash
Input: nums = [3,2,3]
Output: 3
```

Example 2:

```bash
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

Constraints:

- n == nums.length
- 1 <= n <= 5 \* 10^4
- -10^9 <= nums[i] <= 10^9
  The input is generated such that a majority element will exist in the array.

  ## Solution 1 (時間 & 空間都是 O(n))

  ```ts
  function majorityElement(nums: number[]): number {
    const obj: Record<string, number> = {};

    nums.forEach((num) => {
      if (!obj[num]) obj[num] = 1;
      else obj[num]++;
    });

    let max: undefined | string = undefined;
    Object.keys(obj).forEach((key) => {
      if (!max) max = key;
      else {
        if (obj[max] < obj[key]) max = key;
      }
    });

    return Number(max);
  }
  ```

  ## Solution 2 (時間 O(n) & 空間 O(1))

  ```ts
  function majorityElement(nums: number[]): number {
    let candidate = 0;
    let count = 0;

    for (const num of nums) {
      if (count === 0) {
        candidate = num;
        count = 1;
      } else if (num === candidate) count++;
      else count--;
    }

    return candidate;
  }
  ```

## 底層邏輯

### 核心概念：配對消除法（Boyer-Moore Voting Algorithm）

因為「眾數」出現的次數 **超過一半**（> n/2），這意味著：

> 眾數的數量 > 其他所有元素的總和

所以可以把整個過程想像成「投票選舉」：

1. **遇到相同值** → 票數 +1（支持當前候選人）
2. **遇到不同值** → 票數 -1（用一個眾數抵消一個非眾數）
3. **票數歸零** → 重新選擇新候選人

因為眾數的數量比其他所有元素加起來還多，所以：

- 即使眾數不斷被其他元素「配對抵消」
- 最終剩下的候選人，一定就是眾數

### 舉例說明

以 `[3,2,3]` 為例：

```
初始狀態：candidate = 未定, count = 0

步驟 1：num = 3
  → count = 0，選 3 為候選人
  → candidate = 3, count = 1

步驟 2：num = 2
  → 2 ≠ 3，票數 -1
  → candidate = 3, count = 0

步驟 3：num = 3
  → count = 0，重選候選人為 3
  → candidate = 3, count = 1

結果：candidate = 3 ✓
```

## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)
