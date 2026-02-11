# Remove Element

**Difficulty:** Easy  
**LeetCode:** [Remove Element](https://leetcode.com/problems/remove-element/)  
**Topic:** Array / String

## Problem Description

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

Consider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

Custom Judge:

The judge will test your solution with the following code:

```bash
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

Example 1:

```bash
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

Example 2:

```bash
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

## 底層邏輯

<!-- 用一段話整理這個題目的核心邏輯和解題思路 -->

## 關鍵重點

<!-- 列出解題過程中需要注意的重要細節 -->

- 重點 1:
- 重點 2:
- 重點 3:

## 複雜度分析

- **時間複雜度:** O(?)
- **空間複雜度:** O(?)

## 相關題目

<!-- 列出類似或相關的題目 -->

## 學習筆記

<!-- 記錄解題過程中的心得、容易犯的錯誤、優化思路等 -->

### 第一次嘗試

日期: 2026-02-11

### 後續複習

<!-- 每次複習時更新這個部分 -->
