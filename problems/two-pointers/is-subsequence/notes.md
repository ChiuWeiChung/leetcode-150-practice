# Is Subsequence

**Difficulty:** Easy  
**LeetCode:** [Is Subsequence](https://leetcode.com/problems/is-subsequence/)  
**Topic:** Two Pointers

## Problem Description

Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).


Example 1:

```bash
Input: s = "abc", t = "ahbgdc"
Output: true
```

Example 2:

```bash
Input: s = "axc", t = "ahbgdc"
Output: false
 ```

Constraints:

- 0 <= s.length <= 100
- 0 <= t.length <= 10^4
- `s` and `t` consist only of lowercase English letters.
 
## 底層邏輯

這題本質很單純：
只要確認 `s` 的字元能否按照順序，在 `t` 裡依序出現。

重點：
- 不需要連續
- 只需要順序正確
- 可以跳過 `t` 裡不需要的字元

### 核心思維（Two Pointers）

我們用兩個指標：
- `sIndex`：指向 `s` 目前要找的字元
- `tIndex`：掃描整個 `t`

邏輯流程：
- 用 `tIndex` 從頭掃到尾
- 每當 `s[sIndex] === t[tIndex]`，表示找到對應字元
- `sIndex++`
- 如果 `sIndex === s.length`，表示 `s` 全部匹配完成，直接 `return true`

換句話說：
- `t` 負責掃描
- `s` 負責等待被匹配

## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)
