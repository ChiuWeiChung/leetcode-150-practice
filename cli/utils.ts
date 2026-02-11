import * as fs from "fs";
import * as path from "path";
import { TopicsData, Topic, Problem } from "./types";

const CONFIG_PATH = path.join(__dirname, "../config/topics.json");
const PROBLEMS_DIR = path.join(__dirname, "../problems");
const TEMPLATES_DIR = path.join(__dirname, "../templates");

export function loadTopics(): TopicsData {
  if (!fs.existsSync(CONFIG_PATH)) {
    return { topics: [] };
  }
  const data = fs.readFileSync(CONFIG_PATH, "utf-8");
  return JSON.parse(data);
}

export function saveTopics(data: TopicsData): void {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function findTopicBySlug(slug: string): Topic | undefined {
  const data = loadTopics();
  return data.topics.find((t) => t.slug === slug);
}

export function findTopicById(id: string): Topic | undefined {
  const data = loadTopics();
  return data.topics.find((t) => t.id === id);
}

export function createTopicFolder(topicSlug: string): string {
  const topicPath = path.join(PROBLEMS_DIR, topicSlug);
  if (!fs.existsSync(topicPath)) {
    fs.mkdirSync(topicPath, { recursive: true });
  }
  return topicPath;
}

export function createProblemFolder(
  topicSlug: string,
  problemSlug: string,
): string {
  const problemPath = path.join(PROBLEMS_DIR, topicSlug, problemSlug);
  if (!fs.existsSync(problemPath)) {
    fs.mkdirSync(problemPath, { recursive: true });
  }
  return problemPath;
}

export function copyTemplate(
  templateName: string,
  destination: string,
  replacements: Record<string, string>,
): void {
  const templatePath = path.join(TEMPLATES_DIR, templateName);
  let content = fs.readFileSync(templatePath, "utf-8");

  Object.entries(replacements).forEach(([key, value]) => {
    content = content.replace(new RegExp(`{{${key}}}`, "g"), value);
  });

  fs.writeFileSync(destination, content, "utf-8");
}

export function getCurrentDate(): string {
  return new Date().toISOString().split("T")[0];
}

export function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    })
    .replace(/\s+/g, "")
    .replace(/-/g, "");
}
