# Word Pattern

**Difficulty:** Easy  
**LeetCode:** [Word Pattern](https://leetcode.com/problems/word-pattern/)  
**Topic:** Hashmap

## Problem Description

Given a `pattern` and a string `s`, find if `s` follows the same `pattern`.

Here follow means a full match, such that there is a bijection between a letter in `pattern` and a non-empty word in `s`. Specifically:

Each letter in `pattern` maps to exactly one unique word in `s`.
Each unique word in `s` maps to exactly one letter in `pattern`.
No two letters map to the same word, and no two words map to the same letter.

Example 1:

```bash
Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

'a' maps to "dog".
'b' maps to "cat".
```

Example 2:

```bash
Input: pattern = "abba", s = "dog cat cat fish"

Output: false
```

Example 3:

```bash
Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false
```

Constraints:

- `1 <= pattern.length <= 300`
- `pattern` contains only lower-case English letters.
- `1 <= s.length <= 3000`
- `s` contains only lowercase English letters and spaces `' '`.
- `s` does not contain any leading or trailing spaces.
- All the words in `s` are separated by a single space.

## Solution

```ts
function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");
  const patternToWords = new Map();
  const wordsToPattern = new Map();
  if (words.length !== pattern.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const w = words[i];
    if (patternToWords.has(p) && patternToWords.get(p) !== w) return false;
    if (wordsToPattern.has(w) && wordsToPattern.get(w) !== p) return false;

    patternToWords.set(p, w);
    wordsToPattern.set(w, p);
  }

  return true;
}
```

## 底層邏輯

重點是檢查 pattern 與單字是否形成雙向一對一對應。
先用空白切成 words，長度不同直接回傳 false。
用兩個 Map 維護雙向關係：`patternToWords` 與 `wordsToPattern`。
遍歷時若任一方向出現不一致就回傳 false；全部一致則回傳 true。
本質上與 `Isomorphic Strings` 相同，只是把字元替換成單字。

## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(n)

## 過程筆記

一開始解這題時，我其實沒有用 Map。我很自然地寫下：

```ts
const patternToWords: Record<string, string> = {};
```

因為在我腦中，它就是一個 key-value 對應關係。pattern 的字母當 key，單字當 value。看起來再合理不過。前幾個測資也都順利通過，我甚至覺得這題有點太簡單。直到我測到這一組：

```ts
wordPattern("abba", "dog constructor constructor dog");
```

理論上這應該回傳 true。但我的程式卻出現異常判斷。當下其實有點困惑，因為邏輯非常直觀：同一個字母對同一個單字，單字也沒有重複對錯字母。到底哪裡出問題？

結果發現一個奇怪的現象——當 key 是 "constructor" 時，物件的行為跟我預期的不一樣。這時才突然意識到一件事：{} 不是一個乾淨的 dictionary。

在 JavaScript 中，用 {} 建立的物件，其實會繼承自 Object.prototype。而 Object.prototype 上本來就有：

- constructor
- toString
- hasOwnProperty
- ...

也就是說，當我存取：`patternToWords["constructor"]`

這個 key 並不是一個單純的「使用者自訂 key」。它其實會牽涉到 prototype chain，於是我的 mapping 判斷在某些情況下就出現異常 QAQ

簡單來說，不是因為演算法錯，而是因為我選錯了資料結構。那一刻我才真正理解：物件 ≠ 純 Map，這題讓我重新意識到一件事：在 JavaScript 裡，`{}` 並不是純粹的 key-value 容器。而 Map 才是一個真正意義上的資料結構。

改成:

```ts
const patternToWords = new Map<string, string>();
```

之後，問題就完全消失。
