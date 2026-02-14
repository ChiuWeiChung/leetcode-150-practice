# Linked List Cycle

**Difficulty:** Easy  
**LeetCode:** [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)  
**Topic:** Linked List

## Problem Description

Given `head`, the `head` of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. Note that `pos` is not passed as a parameter.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.


Constraints:

- The number of the nodes in the list is in the range [0, 104].
- -$10^5$ <= Node.val <= $10^5$
- pos is -1 or a valid index in the linked-list.


## Solution (Naive)

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false
    let currentNode: ListNode = head;
    let pos = 0;
    // 超暴力解
    const arr = []
    while (currentNode) {
        arr[pos] = currentNode
        const isLoop = arr.find(node => currentNode.next === node);
        if (isLoop) return true
        currentNode = currentNode.next;
        pos++
    }
    return false
};
```


## 複雜度分析

- **時間複雜度:** O($n^2$)
- **空間複雜度:** O(n)

上述的做法其實很暴力，效率也很低，一開始的直覺做法，是把走過的節點全部記錄起來，每往下一個 node 前，就檢查下一個是否已經出現過。這個思路其實沒有錯，只是用陣列去找重複時，每次都要重新掃描一次，導致時間複雜度慢慢累積成 O(n²)。

理論上如果要優化這個演算法，可以透過「龜兔賽跑」(Floyd Cycle Detection) 的方式來優化

所謂的「龜兔賽跑」，就是用兩個 indicator 一起走，一個走得慢 (`slow`)，一個走的比較快 (`fast`)，如果這個 `Linked List` 有所謂的「環」存在的話，`fast` 總會追上 `slow`，如果沒有「環」，則 `fast` 會先走到 null

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true
    }
    return false
};
```


### 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)