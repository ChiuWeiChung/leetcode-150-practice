# Valid Parentheses

**Difficulty:** Easy  
**LeetCode:** [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)  
**Topic:** Stack

## Problem Description

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

```bash
Input: s = "()"

Output: true
```

Example 2:

```bash
Input: s = "()[]{}"

Output: true
```

Example 3:

```bash
Input: s = "(]"

Output: false
```

Example 4:

```bash
Input: s = "([])"

Output: true
```

Example 5:

```bash
Input: s = "([)]"

Output: false
```

 

Constraints:

- 1 <= s.length <= $10^4$
- `s` consists of parentheses only `'()[]{}'`.


## Solution  (Naive)
```ts
function isValid(s: string): boolean {
  if (s.length === 1) return false;

  const ans = { '(': ')', '{': '}', '[': ']', ')': '(', '}': '{', ']': '[' };

  const stack: string[] = [s[0]];
  if (s[0] === ')' || s[0] === '}' || s[0] === ']') return false;
  for (let i = 1; i < s.length; i++) {
    const str = s[i];
    const last = stack[stack.length - 1] as keyof typeof ans;
    if (ans[last] !== str) {
      if (str === ')' || str === '}' || str === ']') return false;
      stack.push(str);
    } else stack.pop();
  }
  return stack.length === 0;
}
```

這份程式把 ans 同時塞了「開括號 -> 關括號」跟「關括號 -> 開括號」，但實際判斷只需要前者就夠了；另外一開始先把 s[0] push 進 stack、再特判第一個字元是不是關括號，這段屬於「先做再補救」，讀起來不夠直覺。更常見、也更順的方式是：一路掃字串，遇到開括號就把「期待的關括號」推進 stack；遇到關括號就直接跟 stack top 比對，對不上立刻 false，最後 stack 為空就是合法。這樣連 mapping 都會變單向，整體更精簡

## Solution 2

```ts
function isValid(s: string): boolean {
    const obj = { '{': '}', '[': ']', '(': ')' }
    const stack: string[] = []

    for (let str of s) {
        // 右邊開口
        if (str in obj) {
            stack.push(str)
        } else {
            // 左邊開口
            const last = obj[stack.pop()];
            if (last !== str) return false
        }
    }

    return stack.length === 0
}
```

這版的好處是：整段程式只做一件事——維護「接下來應該要遇到什麼」；因此不需要特判 s[0]、也不需要額外判斷「如果現在是關括號就 false」那種分支，少掉很多心智負擔。

如果還想再更嚴謹一點的小優化，可以加一個早退：s.length 是奇數必定不可能合法（因為括號一定成對），直接回傳 false

## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(n)
