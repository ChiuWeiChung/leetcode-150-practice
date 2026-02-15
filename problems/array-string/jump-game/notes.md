# Jump Game

**Difficulty:** Medium  
**LeetCode:** [Jump Game](https://leetcode.com/problems/jump-game/)  
**Topic:** Array / String

## Problem Description

You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the last index, or `false` otherwise.

 
Example 1:
```bash
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

Example 2:

```bash
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

Constraints:

- 1 <= nums.length <= $10^4$
- 0 <= nums[i] <= $10^5$

## Solution 1

```ts
function canJump(nums: number[]): boolean {
    if (nums.length === 1) return true
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n >= nums.length - i - 1) return true
        if (n === 0 && i !== nums.length - 1) {
            const sliceArray = nums.slice(0, i);
            const check = sliceArray.every((item, subIndex) => {
                return item <= sliceArray.length - subIndex
            });
            if (check) return false
        }
    }
    return true;
};
```

這份解法是用「遇到 0 就回頭檢查：前面是不是一定會被卡死在這個 0」的想法在寫，能 AC 但有幾個地方其實蠻傷效能、也有邏輯上的風險點，可以改善。最大問題就是遇到 0 就 slice + every，最壞會變成 O($n^2$)


### 複雜度分析

- **時間複雜度:** O($n^2$)
- **空間複雜度:** O(n)

邏輯可以更直接：不用特判「0」，本質是「最遠能到哪」，走到第 i 格時，能更新「目前最遠能到的 index」：`maxReach = max(maxReach, i + nums[i])`，如果某一刻 i > maxReach，代表這格根本走不到，直接 false。如下方的程式碼

## Solution 2

```ts
function canJump(nums: number[]): boolean {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;           // 精髓所在!! 走不到這格，結束
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= nums.length - 1) return true; // 已經覆蓋到終點
  }

  return true;
}
```

### 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)
