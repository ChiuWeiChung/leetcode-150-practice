import { createTopic } from "./commands/createTopic";

const chalk = require("chalk");

const TOP_150_TOPICS = [
  "Array / String",
  "Two Pointers",
  "Sliding Window",
  "Matrix",
  "Hashmap",
  "Intervals",
  "Stack",
  "Linked List",
  "Binary Tree General",
  "Binary Tree BFS",
  "Binary Search Tree",
  "Graph General",
  "Graph BFS/DFS",
  "Trie",
  "Backtracking",
  "Divide & Conquer",
  "Kadane's Algorithm",
  "Binary Search",
  "Heap",
  "Bit Manipulation",
  "1D Dynamic Programming",
  "Multidimensional DP",
  "Math",
];

console.log(chalk.bold.cyan("\n🌱 Seeding Top Interview 150 Topics...\n"));

TOP_150_TOPICS.forEach((topic) => {
  createTopic(topic);
});

console.log(chalk.bold.green("\n✓ Seeding complete!"));
console.log(chalk.gray(`Created ${TOP_150_TOPICS.length} topics.`));
console.log(chalk.gray('Use "npm run list" to see all topics.\n'));
