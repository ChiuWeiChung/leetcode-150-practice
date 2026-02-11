import { loadTopics } from "../utils";
import * as path from "path";
import { spawn } from "child_process";

const chalk = require("chalk");

export function runProblem(problemSlug: string): void {
  const data = loadTopics();

  // Find the problem across all topics
  let foundTopic = null;
  let foundProblem = null;

  for (const topic of data.topics) {
    const problem = topic.problems.find((p) => p.slug === problemSlug);
    if (problem) {
      foundTopic = topic;
      foundProblem = problem;
      break;
    }
  }

  if (!foundProblem || !foundTopic) {
    console.log(chalk.red(`Problem "${problemSlug}" not found!`));
    console.log(chalk.gray('Use "npm run list" to see available problems.'));
    return;
  }

  const solutionPath = path.join(
    __dirname,
    "../../problems",
    foundTopic.slug,
    problemSlug,
    "solution.ts",
  );

  console.log(chalk.cyan(`\nRunning: ${foundProblem.title}\n`));

  // Run with ts-node
  const child = spawn("npx", ["ts-node", solutionPath], {
    stdio: "inherit",
    shell: true,
  });

  child.on("error", (error) => {
    console.log(chalk.red(`Error running solution: ${error.message}`));
  });
}
