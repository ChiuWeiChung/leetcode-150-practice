# Longest Consecutive Sequence

**Difficulty:** Medium  
**LeetCode:** [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)  
**Topic:** Hashmap

## Problem Description

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in `O(n)` time.

 

Example 1:

```bash
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

Example 2:

```bash
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

Example 3:

```bash
Input: nums = [1,0,1,2]
Output: 3
```
 

Constraints:

- 0 <= nums.length <= $10^5$
- -$10^9$ <= nums[i] <= $10^9$

## Solution

```ts
function longestConsecutive(nums: number[]): number {
    const set = new Set(nums)
    let record = 0;


    for (const n of set) {
        if (!set.has(n - 1)) {
            // 代表 n 是起點
            let current = n;
            let count = 1;
            while (set.has(current + 1)) {
                current++;
                count++;
            }
            record = Math.max(record, count);
        }
    }
    return record;
}
```


## 底層邏輯

這題 (Longest Consecutive Sequence) 關鍵其實**不要先排序，改用 Hash Set 去「直接查詢」連續數字**。

> 因為題目要求 O(n)，如果先 sort 就會變 O(n log n)，不符合要求。


換個角度想，如果某個數字是連續序列的「起點」，那它前一個數 (num - 1) 一定不存在。

例如：

```bash
[100, 4, 200, 1, 3, 2]
```

真正的起點只有：

```bash
1   (因為 0 不在裡面)
100 (因為 99 不在裡面)
200 (因為 199 不在裡面)
```

只要找到「起點」，就可以一直往後檢查：

```bash
1 → 2 → 3 → 4
```

這樣每個數只會被走一次，整體就是 O(n)。

以實際流程來說，先把所有數字丟進 Set（方便 O(1) 查詢），每個數字都檢查：如果 num - 1 存在 → 跳過（不是起點），如果不存在 → 從這裡開始往右延伸

## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(n)
