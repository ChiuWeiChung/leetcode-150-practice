# Longest Common Prefix

**Difficulty:** Easy  
**LeetCode:** [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)  
**Topic:** Array / String

## Problem Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

Example 1:

```bash
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

Example 2:

```bash
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

Constraints:

- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters if it is non-empty.

## Solution

```ts
function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0] ?? "";
  for (let i = 1; i < strs.length && prefix; i++) {
    const str = strs[i];
    const loops = Math.min(str.length, prefix.length);
    let j = 0;
    while (j < loops && str[j] === prefix[j]) j++;
    prefix = str.slice(0, j);
  }
  return prefix;
}
```

## 底層邏輯

這題的重點其實就是「把答案一點一點縮小」。我們先假設第一個字串就是共同前綴，接著拿它去和下一個字串比較，只留下從開頭開始連續相同的那一段；再用這段結果去跟後面的字串一一比對，不斷修剪，直到所有字串都檢查完。因為共同前綴只會變短、不可能變長，所以整個過程就像在逐步排除不符合的部分，最後留下來的那一小段，就是所有字串真正共享的開頭。

## 關鍵重點

<!-- 列出解題過程中需要注意的重要細節 -->

- 重點 1:
- 重點 2:
- 重點 3:

## 複雜度分析

- **時間複雜度:** O(S) S= 字串長度總和
- **空間複雜度:** O(1)

## 相關題目

<!-- 列出類似或相關的題目 -->

## 學習筆記

<!-- 記錄解題過程中的心得、容易犯的錯誤、優化思路等 -->

### 第一次嘗試

日期: 2026-02-12

### 後續複習

<!-- 每次複習時更新這個部分 -->
