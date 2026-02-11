import { loadTopics } from "../utils";

const chalk = require("chalk");

export function listTopics(): void {
  const data = loadTopics();

  if (data.topics.length === 0) {
    console.log(
      chalk.yellow("No topics found. Create one with: npm run topic <name>"),
    );
    return;
  }

  console.log(chalk.bold.cyan("\n📚 LeetCode 150 Topics\n"));

  data.topics.forEach((topic, index) => {
    const problemCount = topic.problems.length;
    const completedCount = topic.problems.filter((p) => p.completed).length;

    console.log(chalk.bold(`${index + 1}. ${topic.name}`));
    console.log(chalk.gray(`   Slug: ${topic.slug}`));
    console.log(
      chalk.gray(`   Progress: ${completedCount}/${problemCount} problems`),
    );

    if (topic.problems.length > 0) {
      topic.problems.forEach((problem) => {
        const status = problem.completed ? chalk.green("✓") : chalk.gray("○");
        const difficultyColor =
          problem.difficulty === "Easy"
            ? chalk.green
            : problem.difficulty === "Medium"
              ? chalk.yellow
              : chalk.red;

        console.log(
          `   ${status} ${problem.id}. ${problem.title} ${difficultyColor(`[${problem.difficulty}]`)}`,
        );
      });
    }
    console.log("");
  });
}
