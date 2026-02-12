/**
 * Problem: Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let profit = 0;

  for (let price of prices) {
    if (price < minPrice) minPrice = price;
    else profit = Math.max(profit, price - minPrice);
  }
  return profit;
}

// Test cases
function runTests() {
  console.log("Running test cases for: Best Time to Buy and Sell Stock");

  // Test case 1
  const test1 = maxProfit([7, 1, 5, 3, 6, 4]);
  console.log("Test 1:", test1);

  // Test case 2
  const test2 = maxProfit([7, 6, 4, 3, 1]);
  console.log("Test 2:", test2);

  // Test case 3
  const test3 = maxProfit([2, 1, 4]);
  console.log("Test 3:", test3);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { maxProfit };
