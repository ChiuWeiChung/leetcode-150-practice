# Rotate Array

**Difficulty:** Medium  
**LeetCode:** [Rotate Array](https://leetcode.com/problems/rotate-array/)  
**Topic:** Array / String

## Problem Description

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

 

Example 1:

```bash
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

Example 2:

```bash
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```
 

Constraints:

- 1 <= nums.length <= $10^5$
- -$2^{31}$ <= nums[i] <= $2^{31}$ - 1
- 0 <= k <= $10^5$


## Solution

```ts
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;

  function reverse(left: number, right: number) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
}
```

先看目標：

nums = [1,2,3,4,5,6,7], k = 3
結果 → [5,6,7,1,2,3,4]


真正的關鍵是： 旋轉 = 幾次反轉 (reverse)

**Step 1：整個陣列反轉**
```bash
[1,2,3,4,5,6,7]
↓ reverse 全部
[7,6,5,4,3,2,1]
```

**Step 2：反轉前 k 個**
```bash
[7,6,5 | 4,3,2,1]
↓
[5,6,7 | 4,3,2,1]
```

**Step 3：反轉剩下的**
```bash
[5,6,7 | 4,3,2,1]
↓
[5,6,7 | 1,2,3,4]
```

直覺理解：第一次反轉 → 把尾巴搬到前面（但順序錯），第二、三次反轉 → 修正各自區段順序

其實是一個「先大翻，再局部修正」的技巧。

其中一定要

```bash
k = k % nums.length
```

因為 

```bash
n = 7
k = 10
```

等於只 rotate 3 次。


## 複雜度分析

- **時間複雜度:** On)
- **空間複雜度:** O(1)
