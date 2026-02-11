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

## Solution

```ts
function mergeSortedArray(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
) {
  let i = m - 1; // nums1 的最後一個元素
  let j = n - 1; // nums2 的最後一個元素
  let k = m + n - 1; // 最後陣列（答案）的最後一個元素

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  console.log("Merged Array:", nums1);
}
```

## 底層邏輯

**核心思路：從後往前填充（Three Pointers）**

使用三個指標從陣列尾部開始比較和填充，避免覆蓋 nums1 中尚未處理的元素。每次選擇兩個指標指向的較大值放入結果位置，然後向前移動對應指標。當 nums2 的所有元素都處理完畢時，合併完成。

---

## 指標移動演示

**初始狀態：**

```js
((nums1 = [1, 2, 3, 0, 0, 0]), (m = 3));
((nums2 = [2, 5, 6]), (n = 3));
```

```
nums1: [1, 2, 3, 0, 0, 0]
              ↑        ↑
              i        k     (i = 2, k = 5)

nums2: [2, 5, 6]
              ↑
              j                 (j = 2)
```

---

### Step 1: 比較 3 vs 6

```
比較: nums1[2]=3 < nums2[2]=6
動作: 將 6 放入 nums1[5]，j--

nums1: [1, 2, 3, 0, 0, 6]
              ↑     ↑
              i     k

nums2: [2, 5, 6]
           ↑
           j              (j = 1)
```

**結果:** `[1, 2, 3, 0, 0, 6]`  
**指標:** i=2, j=1, k=4

---

### Step 2: 比較 3 vs 5

```
比較: nums1[2]=3 < nums2[1]=5
動作: 將 5 放入 nums1[4]，j--

nums1: [1, 2, 3, 0, 5, 6]
              ↑  ↑
              i  k

nums2: [2, 5, 6]
        ↑
        j                 (j = 0)
```

**結果:** `[1, 2, 3, 0, 5, 6]`  
**指標:** i=2, j=0, k=3

---

### Step 3: 比較 3 vs 2

```
比較: nums1[2]=3 > nums2[0]=2
動作: 將 3 放入 nums1[3]，i--

nums1: [1, 2, 3, 3, 5, 6]
           ↑  ↑
           i  k

nums2: [2, 5, 6]
        ↑
        j                 (j = 0)
```

**結果:** `[1, 2, 3, 3, 5, 6]`  
**指標:** i=1, j=0, k=2

---

### Step 4: 比較 2 vs 2

```
比較: nums1[1]=2 = nums2[0]=2
動作: 將 nums2[0] 放入 nums1[2]，j--

nums1: [1, 2, 2, 3, 5, 6]
        ↑  ↑
        i  k

nums2: [2, 5, 6]
     ↑
     j                    (j = -1)
```

**結果:** `[1, 2, 2, 3, 5, 6]`  
**指標:** i=1, j=-1, k=1

---

### 結束條件

當 `j < 0` 時，nums2 的所有元素已處理完畢，合併完成！  
剩餘的 nums1 元素已經在正確位置，無需移動。

## 關鍵重點

### 1. 為什麼要從後往前填充？

**避免覆蓋未處理的元素**：如果從前往後填充，會覆蓋 nums1 中還沒處理的元素。從後往前填充則利用 nums1 尾部的空位，不會影響前面待處理的數據。

### 2. Three Pointers 指標分工

- **`i`**: 追蹤 nums1 的有效元素（初始值 `m - 1`）
- **`j`**: 追蹤 nums2 的元素（初始值 `n - 1`）
- **`k`**: 追蹤當前要填充的位置（初始值 `m + n - 1`）

每次填充後，被使用的指標和 `k` 都要向前移動（遞減）。

### 3. 迴圈結束條件：只檢查 `j >= 0`

**為什麼只需要檢查 nums2？**

- 當 `j < 0` 時，nums2 所有元素已處理完畢
- 此時 nums1 剩餘的元素已經在正確位置（因為本來就是排序好的）
- 不需要繼續移動

```js
// nums2 處理完畢時的狀態
nums1 = [1, 2, 2, 3, 5, 6]
         ↑剩餘元素已在正確位置
```

### 4. 相等值的處理順序

當 `nums1[i] === nums2[j]` 時，**優先放 nums2 的元素**，這樣可以確保穩定性，並且簡化邏輯（只要 nums2 沒處理完就繼續）。

## 複雜度分析

- **時間複雜度:** O(m+n)
