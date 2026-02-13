# Two Sum

**Difficulty:** Easy  
**LeetCode:** [Two Sum](https://leetcode.com/problems/two-sum/)  
**Topic:** Hashmap

## Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

```bash
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

Example 2:

```bash
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

Example 3:

```bash
Input: nums = [3,3], target = 6
Output: [0,1]
```

Constraints:

- 2 <= nums.length <= $10^4$
- -$10^9$ <= nums[i] <= $10^9$
- -$10^9$ <= target <= $10^9$
- Only one valid answer exists.

## Solution

```ts
function twoSum(nums: number[], target: number): number[] {
  const needMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (needMap.has(need)) return [needMap.get(need), i];
    needMap.set(nums[i], i);
  }
  return [];
}
```

用 map 記「某個數值最後出現在哪個 index」。走到第 i 個 nums[i] 時，先算它還差多少才會到 target（need = target - nums[i]），再去 map 看 need 有沒有出現過。如果有，代表剛好配對成功，直接回傳 [j, i]。沒有就把 nums[i] 和 i 存進 map，給後面的人用來配。

## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(n)
