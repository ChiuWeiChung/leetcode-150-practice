# Happy Number

**Difficulty:** Easy  
**LeetCode:** [Happy Number](https://leetcode.com/problems/happy-number/)  
**Topic:** Hashmap

## Problem Description

Write an algorithm to determine if a number `n` is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return `true` if `n` is a happy number, and `false` if not.

Example 1:

```bash
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

Example 2:

```bash
Input: n = 2
Output: false
```

Constraints:

- 1 <= n <= $2^{31}$ - 1

## Solution 1 (Naive 先將數字轉成字串陣列)

```ts
function isHappy(n: number): boolean {
  const squareMap = new Map();
  function recursive(sum: number) {
    const arr = String(sum).split("");

    const checkSum = arr.reduce((acc, cur) => (acc += parseInt(cur)), 0);
    if (checkSum === 1) return true;

    let sumOfSquare = 0;
    arr.forEach((item) => {
      sumOfSquare += parseInt(item) * parseInt(item);
    });
    if (squareMap.has(sumOfSquare)) return false;
    squareMap.set(sumOfSquare, true);
    return recursive(sumOfSquare);
  }

  return recursive(n);
}
```

## 底層邏輯

這題的本質是在模擬數字轉換過程，並利用「已出現數字」來偵測循環；如果過程中能走到 1 就是 happy number，否則只要發現重複數字，就代表陷入無限循環。

## Solution 2

```ts
function isHappy(n: number): boolean {
  const seen = new Set();
  function calc(number: number) {
    let sum = 0;
    while (number > 0) {
      let remain = number % 10;
      sum += remain * remain;
      number = Math.floor(number / 10);
    }
    return sum;
  }

  let iterative = n;
  while (iterative !== 1 && !seen.has(iterative)) {
    seen.add(iterative);
    iterative = calc(iterative);
  }

  return iterative === 1;
}
```

Solution 2 的解法每一輪就是做數學拆位：`% 10`、`/ 10`，不用轉字串再 parse，乾淨又快。

- 直接判斷 `n === 1` 就好，邏輯更直覺，也少一段特別處理。

- 用 `Set` 當「看過就記下來」的清單，比 `Map(sum, true)` 更貼切。

## 複雜度分析

- **時間複雜度:** O(k \* digits)，k 是走到 1 或進入循環前的步數；digits 是位數（通常不超過 10 位）。
- **空間複雜度:** 空間：O(k)（`seen` 記錄走過的數字；k 通常很小）
