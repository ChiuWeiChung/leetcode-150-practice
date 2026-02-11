#!/usr/bin/env node

import { Command } from "commander";
import { createTopic } from "./commands/createTopic";
import { addProblem } from "./commands/addProblem";
import { listTopics } from "./commands/listTopics";
import { runProblem } from "./commands/runProblem";

const chalk = require("chalk");
const program = new Command();

program
  .name("leetcode-cli")
  .description("CLI tool for managing LeetCode 150 practice")
  .version("1.0.0");

program
  .command("create-topic <name>")
  .description("Create a new topic category")
  .action((name: string) => {
    createTopic(name);
  });

program
  .command("add-problem <topic>")
  .description("Add a new problem to a topic")
  .action(async (topic: string) => {
    await addProblem(topic);
  });

program
  .command("list")
  .description("List all topics and problems")
  .action(() => {
    listTopics();
  });

program
  .command("run <problem-slug>")
  .description("Run a problem solution")
  .action((problemSlug: string) => {
    runProblem(problemSlug);
  });

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

program.parse(process.argv);
