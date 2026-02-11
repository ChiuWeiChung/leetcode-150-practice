export interface Problem {
  id: number;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  leetcodeUrl: string;
  completed?: boolean;
}

export interface Topic {
  id: string;
  name: string;
  slug: string;
  problems: Problem[];
}

export interface TopicsData {
  topics: Topic[];
}
