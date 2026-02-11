# Remove Duplicates from Sorted Array

**Difficulty:** Easy  
**LeetCode:** [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)  
**Topic:** Array / String

## Problem Description

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in `nums` to be `k​​​​​​​​​​​​​​`. After removing duplicates, return the number of unique elements `k`.

The first `k` elements of `nums` should contain the unique numbers in sorted order. The remaining elements beyond index `k - 1` can be ignored.

Custom Judge:

The judge will test your solution with the following code:

```bash
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```
If all assertions pass, then your solution will be accepted.

 

Example 1:

```bash
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

Example 2:

```bash
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

Constraints:

- 1 <= nums.length <= 3 * 10^4
- -100 <= nums[i] <= 100
- nums is sorted in non-decreasing order.

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
