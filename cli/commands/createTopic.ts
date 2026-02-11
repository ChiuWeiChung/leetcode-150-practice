import { Topic } from "../types";
import { loadTopics, saveTopics, slugify, createTopicFolder } from "../utils";

const chalk = require("chalk");

export function createTopic(topicName: string): void {
  const data = loadTopics();
  const topicSlug = slugify(topicName);

  // Check if topic already exists
  const existingTopic = data.topics.find((t) => t.slug === topicSlug);
  if (existingTopic) {
    console.log(chalk.yellow(`Topic "${topicName}" already exists!`));
    return;
  }

  // Create new topic
  const newTopic: Topic = {
    id: topicSlug,
    name: topicName,
    slug: topicSlug,
    problems: [],
  };

  data.topics.push(newTopic);
  saveTopics(data);

  // Create folder
  createTopicFolder(topicSlug);

  console.log(chalk.green(`✓ Created topic: ${topicName}`));
  console.log(chalk.gray(`  Slug: ${topicSlug}`));
  console.log(chalk.gray(`  Folder: problems/${topicSlug}/`));
}
