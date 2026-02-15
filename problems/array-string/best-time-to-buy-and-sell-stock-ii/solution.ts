/**
 * Problem: Best Time to Buy and Sell Stock II
 * Difficulty: Medium
 * LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */

function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let profitCandidate = 0;
  let sumOfProfit = 0;

  for (let i = 0; i <= prices.length; i++) {
    const price = prices[i];
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

// Test cases
function runTests() {
  console.log('Running test cases for: Best Time to Buy and Sell Stock II');

  // Test case 1
  const test1 = maxProfit([7, 1, 5, 3, 6, 4]); // 7
  console.log('Test 1:', test1);

  // Test case 2
  const test2 = maxProfit([1, 2, 3, 4, 5]); // 4
  console.log('Test 2:', test2);

  // Test case 3
  const test3 = maxProfit([7, 6, 4, 3, 1]); // 0
  console.log('Test 3:', test3);

  // Test case 4
  const test4 = maxProfit([7, 2, 3, 5, 1, 3, 9, 2]); // 3 + 8 = 11
  console.log('Test 4:', test4);

  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { maxProfit };
