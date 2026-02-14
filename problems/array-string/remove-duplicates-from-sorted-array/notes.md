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

## Solution

```ts
function removeDuplicates(nums: number[]): number {
  let k = 1; // 下一個唯一值要寫入的位置

  for (let i = 1; i < nums.length; i++) {
    // 如果 nums[i] 與前一個唯一值不同，則代表 nums[i] 是下一個唯一值(nums[k])得候選人
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

```

## 底層邏輯


重點在於提供的陣列已經是「排序」好的，因此重複的元素一定「連在一起」，所以可以用 `two pointers` 來解決，想像 `i` 用來掃描整個陣列，而 `k` 用來負責指向 `「下一個要放唯一值的位置」`。

1. 先把第一個數字當成唯一值 (第一個數字一定是)
2. 從第二個數字開始掃描
3. 如果遇到「不同於前一個唯一值」的數字
   - 把它放到 `k`
   - `k++` 
4. 最後回傳 `k`

輸入陣列為

```bash
nums = [0,0,1,1,2]
```

初始：

```bash
k = 1
```

| i | nums[i] | 是否等於 nums[k-1] | 動作              |
| - | ------- | -------------- | --------------- |
| 1 | 0       | 等於             | 跳過              |
| 2 | 1       | 不等於            | nums[1] = 1，k++ |
| 3 | 1       | 等於             | 跳過              |
| 4 | 2       | 不等於            | nums[2] = 2，k++ |


結果：

```bash
[0,1,2,_,_]
k = 3
```


## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)