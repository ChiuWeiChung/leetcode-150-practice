/**
 * Problem: Group Anagrams
 * Difficulty: Medium
 * LeetCode: https://leetcode.com/problems/group-anagrams/
 */

// function groupAnagrams(strs: string[]): string[][] {
//   const anagramMap = new Map();

//   function calc(str: string) {
//     const arr = new Array(26).fill(0);
//     for (let i = 0; i < str.length; i++) {
//       const t = str[i].charCodeAt(0) - 97;
//       arr[t]++;
//     }
//     return arr.map((el) => String(el).padStart(3, "0")).join("");
//   }

//   const answer: string[][] = [];
//   let i = 0;
//   for (let str of strs) {
//     const key = calc(str);
//     if (!anagramMap.has(key)) {
//       anagramMap.set(key, i);
//       answer[i] = [str];
//       i++;
//     } else {
//       const index = anagramMap.get(key);
//       answer[index].push(str);
//     }
//   }

//   return answer;
// }

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  function keyOf(s: string): string {
    const cnt = new Array<number>(26).fill(0);
    for (let i = 0; i < s.length; i++) cnt[s.charCodeAt(i) - 97]++;
    return cnt.join("#");
  }
  for (const s of strs) {
    const key = keyOf(s);
    const bucket = map.get(key);
    if (bucket) bucket.push(s);
    else map.set(key, [s]);
  }

  return [...map.values()];
}

// Test cases
function runTests() {
  // // Test case 1
  const test1 = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
  console.log("Test 1:", test1);

  // Test case 2
  const test2 = groupAnagrams([""]);
  console.log("Test 2:", test2);

  // Test case 3
  const test3 = groupAnagrams(["a"]);
  console.log("Test 3:", test3);

  // Test case 4
  const test4 = groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]);
  console.log("Test 4:", test4);
}

// Run tests if file is executed directly
if (require.main === module) {
  runTests();
}

export { groupAnagrams };
