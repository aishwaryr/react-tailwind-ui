import type { CreateIssueInput, Issue } from "@/types/issue";

const STORAGE_KEY = "issues";

function getStoredIssues(): Issue[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data) as Issue[];
}

function saveIssues(issues: Issue[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(issues));
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function createIssue(input: CreateIssueInput): Promise<Issue> {
  // Pretend we're making a network request.
  await delay(500);

  const issue: Issue = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date()
      .toISOString(),
  };

  const issues = getStoredIssues();

  saveIssues([...issues, issue]);

  return issue;
}

export async function getIssue(id: string): Promise<Issue | undefined> {
  // Pretend we're making a network request.
  await delay(300);

  const issues = getStoredIssues();

  return issues.find((issue) => issue.id === id);
}
