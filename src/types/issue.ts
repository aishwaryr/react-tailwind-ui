export type Priority = "low" | "medium" | "high";
export type IssueType = "bug" | "feature" | "task";

export interface Issue {
  id: string;
  title: string;
  description: string;
  estimate: number;
  dueDate: string;
  priority: Priority;
  type: IssueType;
  urgent: boolean;
  notification: boolean;
  createdAt: string;
}

export type CreateIssueInput = Omit<Issue, "id" | "createdAt">;
