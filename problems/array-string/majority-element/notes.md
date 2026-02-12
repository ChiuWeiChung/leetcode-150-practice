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

這個算法很巧妙，因為「眾數」出現次數 **超過一半**（> n/2），意思就是說眾數的數量比其他所有元素加起來還多。那我們可以把這個過程想像成一場「選舉」。

簡單來說，就是遇到相同的數字就讓票數 +1（支持當前候選人），遇到不同的數字就 -1（用一個眾數去抵消一個非眾數）。當票數歸零時，就重新選一個候選人。這樣不斷配對消除下去，因為眾數本身數量就多，所以最後一定會剩下眾數。

換句話說，我們不需要真的去記錄每個數字各出現幾次，而是透過「相消」來確認。遇到跟 candidate 不同的數字就 count -1，count 歸零就換新的 candidate；遇到相同的就 count +1。因為題目保證一定有眾數存在，所以最後留下的 candidate 一定就是答案。

> 此為 Boyer-Moore Voting Algorithm ，該演算法前提條件就是眾數必須出現 超過 n/2 次。如果不滿足這個條件，這個算法會失效。

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
