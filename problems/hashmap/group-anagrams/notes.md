# Group Anagrams

**Difficulty:** Medium  
**LeetCode:** [Group Anagrams](https://leetcode.com/problems/group-anagrams/)  
**Topic:** Hashmap

## Problem Description

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

> anagrams: An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

Example 1:

```bash
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
```

Example 2:

```bash
Input: strs = [""]

```

Output: [[""]]

Example 3:

```bash
Input: strs = ["a"]

Output: [["a"]]
```

Constraints:

- 1 <= strs.length <= $10^4$
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.

## Solution

```ts
function groupAnagrams(strs: string[]): string[][] {
  const anagramMap = new Map();

  function calc(str: string) {
    const arr = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      const t = str[i].charCodeAt(0) - 97;
      arr[t]++;
    }

    return arr.map((el) => String(el).padStart(3, "0")).join("");
  }

  const answer: string[][] = [];
  let i = 0;
  for (let str of strs) {
    const key = calc(str);
    if (!anagramMap.has(key)) {
      anagramMap.set(key, i);
      answer[i] = [str];
      i++;
    } else {
      const index = anagramMap.get(key);
      answer[index].push(str);
    }
  }

  return answer;
}
```

在解這題時，我打算用 `Map<key, group>`，key 用「26 個字母計數」來表示字元組成，時間比每個字都排序更穩。

但還是有幾個「更好」的方向，分成 效能、程式碼簡潔、型別安全 來看：

現在的 bottleneck：padStart(3) + join("")

現在把 26 個計數轉成字串 key：String(el).padStart(3,"0") 再 join。這會產生很多字串物件，GC 壓力也偏大，所以 Performance 不會好...。

所以可以改成

```ts
function keyOf(s: string): string {
  const cnt = new Array<number>(26).fill(0);
  for (let i = 0; i < s.length; i++) cnt[s.charCodeAt(i) - 97]++;
  return cnt.join("#"); // 例如 "1#0#0#...#2"
}
```

此外，現在 `Map` 存的是 index，再去 answer[index] push。其實可以直接存「那一組的陣列」，省掉 i、省掉 answer[index]：

## Solution 2

```ts
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  function keyOf(s: string): string {
    const cnt = new Array<number>(26).fill(0);
    for (let i = 0; i < s.length; i++) cnt[s.charCodeAt(i) - 97]++;
    return cnt.join("#");
  }
  for (const s of strs) {
    const key = keyOf(s);
    const bucket = map.get(key);
    if (bucket) bucket.push(s);
    else map.set(key, [s]);
  }

  return [...map.values()];
}
```

這個版本通常也會更快（少一次 array index 尋址、少一個 i 管理、少一次 Map.get(index) 的間接性）。

## 複雜度分析

- **時間複雜度:** O(n \* (k + 26)) ≈ O(nk)（n 個字，每個掃一遍字元，再 join 26 個數）
- **空間複雜度:** O(nk)（輸出本來就要存全部字串；Map key 額外 O(n)）
