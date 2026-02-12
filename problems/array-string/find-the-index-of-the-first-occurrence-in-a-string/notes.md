# Find the Index of the First Occurrence in a String

**Difficulty:** Easy  
**LeetCode:** [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)  
**Topic:** Array / String

## Problem Description

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

 

Example 1:

```bash
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
```

Example 2:

```bash
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
```


Constraints:

- 1 <= haystack.length, needle.length <= $10^4$
- `haystack` and `needle` consist of only lowercase English characters.


## Solution (O($n^2$))

```ts
function strStr(haystack: string, needle: string): number {
  let i = 0;
  let j = 0;

  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      j++;
    } else {
      i-= j;
      j = 0;
    }
    i++;
  }

  return j !== needle.length ? -1 : i-needle.length;
}
```

現在的寫法其實就是 naive substring search（遇到 mismatch 就把 i 往回拉 j 格再繼續），時間複雜度最壞會到 O(n·m)，例如 haystack = "aaaaaa....a", needle = "aaaab" 那種幾乎每次都比到最後才失敗。

## 複雜度分析

- **時間複雜度:** O(n x m)
- **空間複雜度:** O(1)

