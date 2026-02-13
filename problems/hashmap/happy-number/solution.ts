/**
 * Problem: Happy Number
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/happy-number/
 */

// function isHappy(n: number): boolean {
//   const squareMap = new Map();
//   function recursive(sum: number) {
//     const arr = String(sum).split("");

//     const checkSum = arr.reduce((acc, cur) => (acc += parseInt(cur)), 0);
//     if (checkSum === 1) return true;

//     let sumOfSquare = 0;
//     arr.forEach((item) => {
//       sumOfSquare += parseInt(item) * parseInt(item);
//     });
//     if (squareMap.has(sumOfSquare)) return false;
//     squareMap.set(sumOfSquare, true);
//     return recursive(sumOfSquare);
//   }

//   return recursive(n);
// }

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

// Test cases
function runTests() {
  console.log("Running test cases for: Happy Number");

  // Test case 1
  const test1 = isHappy(19);
  console.log("Test 1:", test1);

  // // Test case 2
  // const test2 = isHappy(2);
  // console.log("Test 2:", test2);

  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { isHappy };
