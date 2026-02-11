import { Problem } from "../types";
import {
  loadTopics,
  saveTopics,
  findTopicBySlug,
  slugify,
  createProblemFolder,
  copyTemplate,
  getCurrentDate,
  toCamelCase,
} from "../utils";

const inquirer = require("inquirer");
const chalk = require("chalk");
const path = require("path");

export async function addProblem(topicSlugOrName: string): Promise<void> {
  const data = loadTopics();

  // Find the topic from the loaded data
  let topic = data.topics.find((t) => t.slug === topicSlugOrName);
  if (!topic) {
    topic = data.topics.find((t) => t.slug === slugify(topicSlugOrName));
  }

  if (!topic) {
    console.log(chalk.red(`Topic "${topicSlugOrName}" not found!`));
    console.log(chalk.gray('Use "npm run list" to see available topics.'));
    return;
  }

  // Prompt for problem details
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Problem title:",
      validate: (input: string) => input.length > 0 || "Title is required",
    },
    {
      type: "number",
      name: "id",
      message: "Problem number (from LeetCode):",
      validate: (input: number) => !isNaN(input) || "Must be a number",
    },
    {
      type: "list",
      name: "difficulty",
      message: "Difficulty:",
      choices: ["Easy", "Medium", "Hard"],
    },
    {
      type: "input",
      name: "url",
      message: "LeetCode URL:",
      default: (answers: any) => {
        const slug = slugify(answers.title);
        return `https://leetcode.com/problems/${slug}/`;
      },
    },
  ]);

  const problemSlug = slugify(answers.title);

  // Check if problem already exists in this topic
  const existingProblem = topic.problems.find((p) => p.slug === problemSlug);
  if (existingProblem) {
    console.log(
      chalk.yellow(
        `Problem "${answers.title}" already exists in topic "${topic.name}"!`,
      ),
    );
    return;
  }

  // Create problem entry
  const newProblem: Problem = {
    id: answers.id,
    title: answers.title,
    slug: problemSlug,
    difficulty: answers.difficulty,
    leetcodeUrl: answers.url,
    completed: false,
  };

  // Update topic
  topic.problems.push(newProblem);
  saveTopics(data);

  // Create problem folder
  const problemPath = createProblemFolder(topic.slug, problemSlug);

  // Generate function name from problem title
  const functionName = toCamelCase(answers.title);

  // Create solution file from template
  const solutionPath = path.join(problemPath, "solution.ts");
  copyTemplate("solution.template.ts", solutionPath, {
    PROBLEM_TITLE: answers.title,
    DIFFICULTY: answers.difficulty,
    LEETCODE_URL: answers.url,
    FUNCTION_NAME: functionName,
  });

  // Create notes file from template
  const notesPath = path.join(problemPath, "notes.md");
  copyTemplate("notes.template.md", notesPath, {
    PROBLEM_TITLE: answers.title,
    DIFFICULTY: answers.difficulty,
    LEETCODE_URL: answers.url,
    TOPIC: topic.name,
    DATE: getCurrentDate(),
  });

  console.log(chalk.green(`✓ Added problem: ${answers.title}`));
  console.log(chalk.gray(`  Topic: ${topic.name}`));
  console.log(chalk.gray(`  Folder: problems/${topic.slug}/${problemSlug}/`));
  console.log(chalk.gray(`  Files: solution.ts, notes.md`));
}
