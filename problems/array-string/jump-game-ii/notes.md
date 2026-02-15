# Jump Game II

**Difficulty:** Medium  
**LeetCode:** [Jump Game II](https://leetcode.com/problems/jump-game-ii/)  
**Topic:** Array / String

## Problem Description

You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at index 0.

Each element `nums[i]` represents the maximum length of a forward jump from index i. In other words, if you are at index `i`, you can jump to any index `(i + j)` where:

- `0 <= j <= nums[i]` and
- `i + j < n`
Return the minimum number of jumps to reach index `n - 1`. The test cases are generated such that you can reach index `n - 1`.

 

Example 1:

```bash
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

Example 2:

```bash
Input: nums = [2,3,0,1,4]
Output: 2
```

Constraints:

- 1 <= nums.length <= $10^4$
- `0 <= nums[i] <= 1000`
- It's guaranteed that you can reach `nums[n - 1]`.

## Solution

```ts
function jump(nums: number[]): number {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    // 走到目前 jump 的邊界
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
}

```

## 底層邏輯

這題可以視為在做「用目前能到的區間，推下一個區間」，每一次 `jump` 都代表一層可達範圍；掃描當前層時，持續更新下一層可達的最遠位置 `farthest`；直到走到當前層邊界 `currentEnd`，才真正把 `jumps + 1`，並把邊界推進到 `farthest`。

關鍵思路是：先決定「這一步一定要跳」，再在同一層的遍歷過程中決定「下一步最多能跳到哪」。因此能在線性時間 `O(n)` 內得到最少跳躍次數。

## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)
