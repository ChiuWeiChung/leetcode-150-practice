# H-Index

**Difficulty:** Medium  
**LeetCode:** [H-Index](https://leetcode.com/problems/h-index/)  
**Topic:** Array / String

## Problem Description

Given an array of integers `citations` where `citations[i]` is the number of `citations` a researcher received for their $i^{th}$ paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of `h` such that the given researcher has published at least `h` papers that have each been cited at least `h` times.

 

Example 1:

```bash
Input: `citations` = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
```

Example 2:

```bash
Input: citations = [1,3,1]
Output: 1
```
 

Constraints:

- `n == citations.length`
- `1 <= n <= 5000`
- `0 <= citations[i] <= 1000`




## Solution

```ts
function hIndex(citations: number[]): number {
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1) {
            return i;
        }
    }
    return citations.length;
}
```


## 底層邏輯

`h-index` 的條件是：
至少有 `h` 篇論文，且每篇的引用數都 `>= h`。

原始資料是無序的，不容易直接判斷。  
先把 `citations` 由大到小排序後，問題會變得很直觀。

以這組資料為例：

```ts
[3, 0, 6, 1, 5]
```

排序後：

```ts
[6, 5, 3, 1, 0]
```

排序後有一個關鍵特性：
越往右，citation 只會更小。

因此可以用「排名（第幾篇）」來測試 `h`：

```text
第幾篇: 1  2  3  4  5
引用數: 6  5  3  1  0
```

逐一檢查：

- 第 1 篇：`6 < 1` ✘
- 第 2 篇：`5 < 2` ✘
- 第 3 篇：`3 < 3` ✘
- 第 4 篇：`1 < 4` ✔ (回傳 4-1 = 3)

在第 4 篇符合回傳條件，所以最大可行的 `h` 是 `3`。

## 複雜度分析

- **時間複雜度:** O(nlogn)
- **空間複雜度:** O(1)
