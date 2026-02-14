# Merge Two Sorted Lists

**Difficulty:** Easy  
**LeetCode:** [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)  
**Topic:** Linked List

## Problem Description

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Constraints:

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in non-decreasing order.

## Solution 

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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // 先建立一個 dummy head ，後續不會傳 head 即可
    const mergedList = new ListNode();
    let curr = mergedList
    // 只有兩個 Linked List 同時存在時，才有比較的需求
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next;
        } else {
            curr.next = list2
            list2 = list2.next;

        }
        curr = curr.next
    }

    // 把剩下的 Linked List 接在 curr 的 tail 上 
    curr.next = list1 ?? list2;

    return mergedList.next
};
```

## 底層邏輯

這題的核心其實是在練 linked list 的指標操作，思路是同時用兩個指標往前走，每次比較 list1 和 list2 當前節點的大小，把較小的那個直接接到結果串列的尾巴，然後只移動被接上的那個指標，讓結果串列永遠保持排序狀態；

為了讓接節點的流程簡單一致，所以先建立一個 dummy head 當起點 (`mergedList = new ListNode()`)，最後回傳 mergedList.next 即可，而當其中一條 list 走完時，另一條剩下的部分可以直接整段接上，不需要再逐一比較。整體來說重點不是建立新節點，而是重用原本的 node 去改變 next 指向，讓每個節點只被走訪一次，以 O(n + m) 的時間完成 merge。


## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)

