/**
 * Problem: Random Note
 * Difficulty: Easy
 * LeetCode: https://leetcode.com/problems/ransom-note/
 */

// function canConstruct(ransomNote: string, magazine: string): boolean {
//   const ransomNoteMap: Record<string, number> = {};
//   for (let char of ransomNote) {
//     if (ransomNoteMap[char]) ransomNoteMap[char]++;
//     else ransomNoteMap[char] = 1;
//   }

//   const magazineMap: Record<string, number> = {};
//   for (let char of magazine) {
//     if (magazineMap[char]) magazineMap[char]++;
//     else magazineMap[char] = 1;
//   }

//   for (let key in ransomNoteMap) {
//     if (!magazineMap[key] || magazineMap[key] < ransomNoteMap[key]) return false;
//   }
//   return true;
// }

function canConstruct(ransomNote: string, magazine: string): boolean {
  const need: Record<string, number> = {};
  for (let char of ransomNote) {
    need[char] = (need[char] || 0) + 1;
  }

  for(let char of magazine){
    if(need[char]) need[char]--
  }

  for(let key in need){
    if(need[key]) return false
  }
  return true
}

// Test cases
function runTests() {
  console.log('Running test cases for: Random Note');

  // Test case 1
  const test1 = canConstruct('a', 'b');
  console.log('Test 1:', test1);

  // Test case 2
  const test2 = canConstruct('aa', 'ab');
  console.log('Test 2:', test2);

  // Test case 3
  const test3 = canConstruct('aa', 'aab');
  console.log('Test 3:', test3);

  // Add more test cases as needed
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { canConstruct };
