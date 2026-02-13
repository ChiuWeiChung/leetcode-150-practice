# Isomorphic Strings

**Difficulty:** Easy  
**LeetCode:** [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/)  
**Topic:** Hashmap

## Problem Description

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:

```bash
Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
```

Example 2:

```bash
Input: s = "f11", t = "b23"

Output: false

Explanation:

The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.
```

Example 3:

```bash
Input: s = "paper", t = "title"

Output: true
```

Constraints:

- 1 <= s.length <= 5 \* $10^4$
- t.length == s.length
- s and t consist of any valid ascii character.

## Solution

```ts
function isIsomorphic(s: string, t: string): boolean {
  const sToT: Record<string, string> = {};
  const tToS: Record<string, string> = {};
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    const b = t[i];

    const mappedB = sToT[a];
    const mappedA = tToS[b];

    if (mappedB && mappedB !== b) return false;
    if (mappedA && mappedA !== a) return false;

    sToT[a] = b;
    tToS[b] = a;
  }

  return true;
}
```

## 底層邏輯

這題其實不難，重點在「兩個字串之間必須形成一種穩定、固定的一對一」的關係。也就是說，s 裡的某個字元，一旦對應到 t 裡的某個字元，就不能再改變；同樣地，t 裡的某個字元，也不能被兩個不同的字元對應到。

我的做法是用兩個對照表來記錄這種雙向關係。當我從左到右掃過字串時，每次都會取出一組字元 a = s[i] 和 b = t[i]。接著我會看看它們以前有沒有建立過對應。如果 a 之前已經對應到某個字元，但那個字元不是現在的 b，代表規則被打破了，因為同一個字元不應該對應到不同的結果。反過來，如果 b 之前已經對應到某個字元，但不是現在的 a，那就是典型的多對一情況，也是不合法的。只要出現這兩種衝突其中之一，就可以直接判斷這兩個字串不是同構。

如果兩邊都沒有衝突，就把這組對應關係記錄下來，繼續往下掃。整個過程其實就是在確認每一對字元是否都遵守同一套映射規則，只要整趟遍歷都沒有違反這個規則，代表這兩個字串的結構模式是完全一致的，也就可以回傳 true。

整體來說這是一題很典型的 Hash Table 題目，本質是在驗證字元之間是否存在雙向的一對一關係。時間複雜度是線性的 O(n)，因為我們只掃描一次字串；空間複雜度則取決於出現過多少不同字元。

## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(k) (k= 字元數)
