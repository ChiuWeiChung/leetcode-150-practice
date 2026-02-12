# Best Time to Buy and Sell Stock

**Difficulty:** Easy  
**LeetCode:** [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)  
**Topic:** Array / String

## Problem Description

You are given an array `prices` where `prices[i]` is the price of a given stock on the $i^{th}$ day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

Example 1:

```bash
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

Example 2:

```bash
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

Constraints:

- 1 <= prices.length <= $10^5$
- 0 <= prices[i] <= $10^4$

## Solution

```ts
function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let profit = 0;

  for (let price of prices) {
    if (price < minPrice) minPrice = price;
    else profit = Math.max(profit, price - minPrice);
  }
  return profit;
}
```

## 底層邏輯

這題的核心概念是：**找到「右邊某一天 - 左邊最低價格」的最大值**

解題關鍵在於：

1. **追蹤目前為止的最低價格** (`minPrice`)
2. **計算當天賣出的最大利潤**：用當前價格減去最低價格
3. **更新最大利潤**：與之前記錄的 `maxProfit` 比較並更新

核心思路：遍歷陣列時，不斷更新「目前最低買入價」，並將每一天都當作潛在的賣出點來計算利潤

## 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)
