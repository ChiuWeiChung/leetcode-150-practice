# Valid Palindrome

**Difficulty:** Easy  
**LeetCode:** [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)  
**Topic:** Two Pointers

## Problem Description

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.


Example 1:

```bash
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

Example 2:

```bash
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

Example 3:

```bash
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 ```

Constraints:

- 1 <= s.length <= 2 * 10^5
- s consists only of printable ASCII characters.


## Solution 1

```ts
function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !/[a-z0-9]/i.test(s[left])) left++;
        while (left < right && !/[a-z0-9]/i.test(s[right])) right--;

        const l = s[left].toLowerCase();
        const r = s[right].toLowerCase();

        if (l !== r) return false;

        left++;
        right--;
    }

    return true;
}

```

## 底層邏輯

用左右指針從字串兩端往中間走，遇到不是英數字就跳過，遇到有效字元就轉成小寫做比對；只要有一對不相等就直接回傳 `false`，全部對完才是 `true`。這樣不用先建立新的字串，邊走邊比就好。

## 關鍵重點

- 判斷「有效字元」只看英文字母或數字，其他全部跳過。
- 比對前要統一大小寫（或直接用大小寫不敏感的比對方式）。
- 只要 `left < right` 才需要比較，指標交錯或相遇就代表檢查完畢。
- 提前結束：一旦發現不相等就可以直接回傳 `false`，不必再掃下去。


## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)
