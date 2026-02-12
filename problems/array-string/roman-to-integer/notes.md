# Roman to Integer

**Difficulty:** Easy  
**LeetCode:** [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)  
**Topic:** Array / String

## Problem Description

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

For example, `2` is written as `II` in Roman numeral, just two ones added together. 12 is written as XII, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

`I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
`X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
`C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

```bash
Input: s = "III"
Output: 3
Explanation: III = 3.
```

Example 2:

```bash
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

Example 3:

```bash
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

Constraints:

- 1 <= s.length <= 15
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is guaranteed that s is a valid roman numeral in the range `[1, 3999]`.

## Solution 1

```ts
function romanToInt(s: string): number {
  const value: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = value[s[i]];
    const next = i + 1 < s.length ? value[s[i + 1]] : 0;
    sum += cur < next ? -cur : cur;
  }
  return sum;
}
```

## 底層邏輯

這題的核心其實是在判斷「什麼時候要加、什麼時候要減」。羅馬數字大多數情況都是由左到右把數值加起來，例如 XII 就是 10 + 1 + 1，但只有在一種特殊情況下需要做減法：當一個比較小的數字出現在比較大的數字前面時，例如 IV 不是 1 + 5，而是 5 - 1。因此解題時只要從左到右掃過整個字串，對每一個字元判斷「它右邊的數字是否比自己大」，如果右邊比較大，就代表這個數字其實是用來做減法，應該把它從總和中扣掉；否則就正常加上去。整體來說，我們只是用一個對照表把羅馬字元轉成數值，然後一路線性掃描並根據大小關係決定加或減，沒有任何巢狀迴圈或複雜結構，本質上就是一次遍歷字串的條件判斷問題。

## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)
