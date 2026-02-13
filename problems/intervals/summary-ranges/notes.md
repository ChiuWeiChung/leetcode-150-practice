# Summary Ranges

**Difficulty:** Easy  
**LeetCode:** [Summary Ranges](https://leetcode.com/problems/summary-ranges/)  
**Topic:** Intervals

## Problem Description

You are given a sorted unique integer array `nums`.

A range `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

Each range `[a,b]` in the list should be output as:

- `"a->b"` if `a != b`
- `"a"` if `a == b`
 

Example 1:

```bash
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
```

Example 2:

```bash
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
```
 

Constraints:

- `0 <= nums.length <= 20`
- -$2^{31}$ <= nums[i] <= $2^{31}$ - 1
- All the values of `nums` are unique.
- `nums` is sorted in ascending order.

## Solution 1 (Naive)

```ts
function summaryRanges(nums: number[]): string[] {
    if (!nums.length) return [];
    let i = 0;
    let initial = nums[i];
    const answer = [[initial]];
    for (let j = 1; j < nums.length; j++) {
        const current = nums[j];
        if (initial + 1 === current) answer[i].push(current);
        else {
            i++;
            answer[i] = [current];
        }
        initial = current;
    }

    const final = answer.map((arr) => {
        const first = String(arr[0]);
        let last = '';
        if (arr.length > 1) last = String(arr.at(-1));
        return last ? `${first}->${last}` : first;
    });
    return final;
}
```


這題本質上不是在做複雜演算法，而是在讀一串已經排序好的數字，並把連續區間整理出來。

因為題目已經給了 sorted + unique 的條件，所以不需要考慮排序，也不需要處理重複值，重點只剩下一件事：

**一路往右走，觀察連續性，連續就延伸區間，不連續就把目前區段結算。**

可以把流程想像成：

從左邊開始，先記住一個區段的起點。只要下一個數字是連續的，區段就繼續延伸；一旦遇到中斷，就代表一段完成，把這一段輸出，再重新開始新的區間。


### 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(n)


## Solution 2 

```ts
function summaryRanges(nums: number[]): string[] {
  const res: string[] = [];
  const n = nums.length;
  if (n === 0) return res;

  let start = nums[0];

  for (let i = 1; i <= n; i++) {
    // i === n 表示走到尾巴了，強制把最後一段結算
    if (i === n || nums[i] !== nums[i - 1] + 1) {
      const end = nums[i - 1];
      res.push(start === end ? `${start}` : `${start}->${end}`);
      if (i < n) start = nums[i];
    }
  }

  return res;
}
```

這題其實不用先存 number[][] 再 map 成字串；直接用兩個指標（或 start/end）一路掃過去，遇到斷點就把那段 range 立刻輸出，程式會更順、更短，也更像 interval 題型的標準寫法。

### 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(n)
