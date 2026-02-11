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

## Solution

```ts
function removeElement(nums: number[], val: number): number {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j];
      j--;
    } else i++;
  }
  // 精髓所在，j+1 代表新 news 的長度，因為 j 是最後一個不等於 val 的元素的索引
  return j + 1;
};
```

## 底層邏輯

這題的核心就是「原地把要刪的值丟掉，剩下的往前塞」，但我們不用真的刪除，只要把不等於 `val` 的元素留在前面，最後回傳新的長度就好。用雙指標：`i` 從左掃，`j` 從右掃。當 `nums[i]` 是要移除的值，就用 `nums[j]` 來覆蓋它，等於把尾端可留的值換到前面；如果 `nums[i]` 不是 `val`，就安心往右走。最後 `j+1` 就是新陣列長度，因為 `j` 會停在最後一個保留值的位置。

## 關鍵重點

- `i <= j` 是終止條件，避免左右指標交錯還多做。
- 只有在 `nums[i] === val` 時才動 `j`，不然會漏檢查新換過來的值。
- `nums[i]` 被替換後不要馬上 `i++`，因為新值還沒檢查。
- 回傳的是長度不是陣列內容，題目不在乎後面多出來的值。
- 這個寫法不保留原本順序，但題目允許就沒問題。


## 複雜度分析

- **時間複雜度:** O(?)
- **空間複雜度:** O(?)
