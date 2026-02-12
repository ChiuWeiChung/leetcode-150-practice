# Random Note

**Difficulty:** Easy  
**LeetCode:** [Random Note](https://leetcode.com/problems/ransom-note/)  
**Topic:** Hashmap

## Problem Description

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.

Each letter in `magazine` can only be used once in `ransomNote`.

 

Example 1:

```bash
Input: ransomNote = "a", magazine = "b"
Output: false
```

Example 2:

```bash
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

Example 3:

```bash
Input: ransomNote = "aa", magazine = "aab"
Output: true
 ```

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

## Naive Solution

```ts
function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomNoteMap: Record<string, number> = {};
  for (let char of ransomNote) {
    if (ransomNoteMap[char]) ransomNoteMap[char]++;
    else ransomNoteMap[char] = 1;
  }

  const magazineMap: Record<string, number> = {};
  for (let char of magazine) {
    if (magazineMap[char]) magazineMap[char]++;
    else magazineMap[char] = 1;
  }

  for (let key in ransomNoteMap) {
    if (!magazineMap[key] || magazineMap[key] < ransomNoteMap[key]) return false;
  }
  return true;
}
```

上面的寫法雖已是正確解，只是目前屬於「可讀性 OK，但效能不是最優」的版本。這個版本目前的流程是

1. 先統計 ransomNote 每個字母需要幾個
2. 再統計 magazine 每個字母有幾個
3. 最後逐一比對是否足夠

- **時間複雜度:** O(m+n)
- **空間複雜度:** O(1)

因此可以優化的地方在於「不需要兩張表」，理想的思維應該是 **我拿到 magazine 的字，就直接去「抵銷需求」**

```ts
function canConstruct(ransomNote: string, magazine: string): boolean {
  const need: Record<string, number> = {};
  for (let char of ransomNote) {
    need[char] = (need[char] || 0) + 1;
  }

  for(let char of magazine){
    if(need[char]) need[char]--
  }

  for(let key in need){
    if(need[key]) return false
  }
  return true
}
```

上面的方法，只需要一張 need 表：

1. 先記錄 ransomNote 需要哪些字
2. 遍歷 magazine，每看到一個字就扣掉需求
3. 如果全部扣完，就直接成功（可以提前 return）
