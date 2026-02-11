# LeetCode Top Interview 150 練習專案

這是一個使用 TypeScript 建置的 LeetCode 練習系統，包含 CLI 工具來管理題目、主題和學習筆記。

## 專案結構

```
leetcode/
├── cli/                    # CLI 工具源碼
│   ├── commands/          # 各個指令實作
│   ├── index.ts           # CLI 入口點
│   ├── types.ts           # TypeScript 型別定義
│   ├── utils.ts           # 工具函式
│   └── seed.ts            # 主題初始化腳本
├── config/
│   └── topics.json        # 題目和主題的 metadata
├── problems/              # 所有題目的解答
│   └── {topic-slug}/
│       └── {problem-slug}/
│           ├── solution.ts    # 可執行的解答程式
│           └── notes.md       # 學習筆記
├── templates/             # 檔案模板
│   ├── solution.template.ts
│   └── notes.template.md
└── package.json
```

## 快速開始

### 1. 安裝相依套件

```bash
npm install
```

### 2. 初始化主題（選擇性）

執行以下指令會自動建立 LeetCode Top Interview 150 的所有主題分類：

```bash
npm run seed
```

## CLI 指令

### 建立新主題

```bash
npm run topic "Array / String"
```

或使用完整指令：

```bash
npm run cli create-topic "Array / String"
```

### 新增題目到主題

```bash
npm run problem "array-string"
```

然後依照提示輸入：

- Problem title（題目標題）
- Problem number（LeetCode 題號）
- Difficulty（難度：Easy/Medium/Hard）
- LeetCode URL（題目連結）

### 列出所有主題和題目

```bash
npm run list
```

顯示格式：

- ✓ 已完成的題目
- ○ 未完成的題目
- 顯示每個主題的進度

### 執行題目解答

```bash
npm run run two-sum
```

使用 ts-node 直接執行解答檔案，會自動運行內建的測試案例。

## 學習工作流程

### 1. 選擇題目

```bash
npm run list
```

### 2. 新增題目

```bash
npm run problem "array-string"
# 輸入題目資訊
```

### 3. 撰寫解答

編輯 `problems/{topic}/{problem-slug}/solution.ts`

```typescript
function twoSum(nums: number[], target: number): number[] {
  // 實作解答
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  return [];
}
```

### 4. 測試解答

```bash
npm run run two-sum
```

### 5. 記錄學習筆記

編輯 `problems/{topic}/{problem-slug}/notes.md`

在筆記中整理：

- **底層邏輯**：用一段話總結這個題目的核心觀念
- **關鍵重點**：列出需要注意的細節與技巧
- **複雜度分析**：時間與空間複雜度
- **學習筆記**：解題心得、錯誤記錄、優化思路

## 預設主題列表

執行 `npm run seed` 會建立以下主題：

1. Array / String
2. Two Pointers
3. Sliding Window
4. Matrix
5. Hashmap
6. Intervals
7. Stack
8. Linked List
9. Binary Tree General
10. Binary Tree BFS
11. Binary Search Tree
12. Graph General
13. Graph BFS/DFS
14. Trie
15. Backtracking
16. Divide & Conquer
17. Kadane's Algorithm
18. Binary Search
19. Heap
20. Bit Manipulation
21. 1D Dynamic Programming
22. Multidimensional DP
23. Math

## 檔案命名規則

- **Topic Slug**: `array-string`, `two-pointers`
- **Problem Slug**: `two-sum`, `longest-substring-without-repeating-characters`
- 所有空格轉為破折號（-）
- 所有字母轉為小寫
- 移除特殊字元

## 進階用法

### 自訂主題

```bash
npm run topic "My Custom Topic"
```

### 查看 CLI 所有指令

```bash
npm run cli -- --help
```

### 直接使用 CLI

```bash
npm run cli create-topic "Greedy"
npm run cli add-problem "greedy"
npm run cli list
npm run cli run problem-slug
```

## 技術棧

- **語言**: TypeScript
- **執行環境**: Node.js + ts-node
- **CLI 框架**: Commander.js
- **互動式提示**: Inquirer.js
- **終端機樣式**: Chalk

## 授權

ISC
