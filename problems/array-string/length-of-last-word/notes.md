# Length of Last Word

**Difficulty:** Easy  
**LeetCode:** [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)  
**Topic:** Array / String

## Problem Description

Given a string `s` consisting of words and spaces, return the length of the last word in the string.

A word is a maximal `substring` consisting of non-space characters only.

> substring: A substring is a contiguous non-empty sequence of characters within a string.

Example 1:

```bash
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

Example 2:

```bash
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
```

Example 3:

```bash
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```

Constraints:

- 1 <= s.length <= $10^4$
- `s` consists of only English letters and spaces `' '`.
- There will be at least one word in `s`.

## Solution1

```ts
function lengthOfLastWord(s: string): number {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    if (char !== " ") {
      count++;
    } else if (count) break;
  }
  return count;
}
```

## 底層邏輯

從字串尾端開始往前掃描，先一路跳過最後面多餘的空白，確保指標停在「最後一個單字」的最後一個字元；接著繼續往前走，只要遇到的不是空白就把計數器加一，表示這個字元屬於最後一個單字的一部分；一旦遇到空白（或走到字串開頭），就代表最後一個單字已經結束，此時計數器累積的數值就是最後一個單字的長度，直接回傳即可。

## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)
