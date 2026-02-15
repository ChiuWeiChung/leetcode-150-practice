# Best Time to Buy and Sell Stock II

**Difficulty:** Medium  
**LeetCode:** [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)  
**Topic:** Array / String

## Problem Description

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the $i^{th}$ day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can sell and buy the stock multiple times on the same day, ensuring you never hold more than one share of the stock.

Find and return the maximum profit you can achieve.

 

Example 1:
```bash
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
```

Example 2:

```bash
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
```

Example 3:

```bash
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
```
 
Constraints:

- 1 <= prices.length <= 3 * $10^4$
- 0 <= prices[i] <= $10^4$

## Solution

```ts
function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let profitCandidate = 0;
  let sumOfProfit = 0;

  for (let i = 0; i <= prices.length; i++) {
    const price = prices[i];
    // 走到陣列尾端時，強制把最後一段還沒結算的 profitCandidate 加進去
    if (typeof price !== 'number') {
      sumOfProfit += profitCandidate;
      break;
    }

    if (price < minPrice && !profitCandidate) minPrice = price;
    else if (price - minPrice > profitCandidate) profitCandidate = price - minPrice;
    else {
      sumOfProfit += profitCandidate;
      profitCandidate = 0;
      minPrice = price;
    }
  }

  return sumOfProfit;
}
```

目前寫法本質上是在「把整段上漲區間當成一次交易」，每次抓到一段從低點一路漲到高點的區間，就把這段的最大利潤加進總和，然後在「趨勢轉弱」的那一刻結算、重新找下一段。

### 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)

## Solution 2 (ChatGPT 提供的解法)

這題的「最佳解」其實更直覺：把所有相鄰兩天的正價差加總。

原因是題目允許多次交易、且同一天可賣再買（等價於「只要今天比昨天貴，就把這段漲幅吃下來」）。一段連續上漲 `1→3→5`：

- 一次做到底是 5-1=4
- 拆成每天賺也是 (3-1)+(5-3)=4
  - 所以直接累加每個 prices[i]-prices[i-1] > 0 的部分就好。

```ts
function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1];
    if (diff > 0) profit += diff;
  }
  return profit;
}

```

### 複雜度分析

- **時間複雜度:** O(n)
- **空間複雜度:** O(1)
