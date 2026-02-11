# Merge Sorted Array

**Difficulty:** Easy  
**LeetCode:** [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)  
**Topic:** Array / String

## Problem Description

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers m and n, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to 0 and should be ignored. `nums2` has a length of `n`.

Example 1:

```console
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

Example 2:

```console
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

Example 3:

```console
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

Constraints:

- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- -10^9 <= nums1[i], nums2[j] <= 10^9

## 底層邏輯

<!-- 用一段話整理這個題目的核心邏輯和解題思路 -->

指標移動圖

```js
((nums1 = [1, 2, 3, 0, 0, 0]), (m = 3));
((nums2 = [2, 5, 6]), (n = 3));
```

```console
nums1: [1, 2, 3, 0, 0, 0]
              ↑i        (i = 2)

nums2: [2, 5, 6]
              ↑j           (j = 2)

nums1: [1, 2, 3, 0, 0, 0]
                       ↑k     (k = 5)
```

Step 1

```js
nums1[i] = 3;
nums2[j] = 6;
```

6 比較大 -> 放入 nums1[k] (k=5)

```console
nums1: [1, 2, 3, 0, 0, 6]
                       ↑k
```

此時的狀態

```console

nums2: [2, 5, 6]
           ↑j           (j = 2)

nums1: [1, 2, 3, 0, 0, 0]
                    ↑k
              ↑i
```

Step 2

```js
nums1[i] = 3;
nums2[j] = 5;
```

5 比較大 -> 放入 nums1[k] (k=4)

```console
nums1: [1, 2, 3, 0, 5, 6]
                    ↑k
```

此時的狀態

```console
nums2: [2, 5, 6]
        ↑j

nums1: [1, 2, 3, 0, 5, 6]
                 ↑k
              ↑i
```

Step 3

```js
nums1[i] = 3;
nums2[j] = 2;
```

3 比較大 -> 放入 nums1[k] (k=3)

此時的狀態

```console
nums2: [2, 5, 6]
        ↑j           (j = 0)

nums1: [1, 2, 3, 3, 5, 6]
              ↑k
           ↑i
```

Step 4

```js
nums1[i] = 2;
nums2[j] = 2;
```

一樣大 -> nums2[j] 放入 nums1[k] (k=2)

此時的狀態

```console
nums2: [2, 5, 6]
    ↑j           (j = -1)

nums1: [1, 2, 2, 3, 5, 6]
              ↑k
           ↑i
```

因為 j <0 所以結束

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
