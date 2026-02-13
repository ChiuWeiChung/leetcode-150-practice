# Valid Anagram

**Difficulty:** Easy  
**LeetCode:** [Valid Anagram](https://leetcode.com/problems/valid-anagram/)  
**Topic:** Hashmap

## Problem Description

Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and false otherwise.

> anagram: An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

Example 1:

```bash
Input: `s` = "anagram", `t` = "nagaram"

Output: true
```

Example 2:

```bash
Input: `s` = "rat", `t` = "car"

Output: false
```

Constraints:

- 1 <= `s`.length, `t`.length <= 5 \* $10^4$
- `s` and `t` consist of lowercase English letters.

## Solution 1 (兩張表互相比對)

```ts
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const sMap: Record<string, number> = {};
  const tMap: Record<string, number> = {};

  for (let char of s) {
    sMap[char] = (sMap[char] ?? 0) + 1;
  }

  for (let char of t) {
    tMap[char] = (tMap[char] ?? 0) + 1;
  }

  for (let key in sMap) {
    if (sMap[key] !== tMap[key]) return false;
  }

  return true;
}
```

分別統計 s 和 t 中每個字元出現的次數，最後逐一比對是否完全一致。

Anagram 的本質是「字母出現次數相同」。因此可以用兩個 HashMap 記錄字元頻率，只要任一字母次數不同，就不是 anagram。

### 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(n)

## Solution2 (使用 charCodeAt 特性)

```ts
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const countArray = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const sStr = s[i];
    const tStr = t[i];

    const sIndex = sStr.charCodeAt(0) - 97;
    const tIndex = tStr.charCodeAt(0) - 97;
    countArray[sIndex]++;
    countArray[tIndex]--;
  }
  return countArray.every((el) => el === 0);
}
```

用一個長度為 26 的陣列記錄「字母出現次數差值」，遇到 s 就 +1，遇到 t 就 -1，最後全部為 0 即代表相同。

因為題目限定小寫英文字母（a–z），可以用固定大小的陣列取代 HashMap，透過 charCodeAt 把字母轉成 index。

這樣可以在一次迴圈中同時完成加減操作，空間從 O(n) 降為 O(1)，效率更佳。

### 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)
