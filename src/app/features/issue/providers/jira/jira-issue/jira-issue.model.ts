// Mapped Data Types
// -----------------
import {JiraOriginalComponent, JiraOriginalStatus} from '../jira-api-responses';

export type JiraAuthor = Readonly<{
  id: string;
  name: string;
  key: string;
  accountId: string;
  emailAddress: string;
  avatarUrl: string;
  displayName: string;
  active: boolean;
  timeZone: string;
}>;

export type JiraAttachment = Readonly<{
  id: string;
  filename: string;
  created: string;
  size: number;
  mimeType: string;
  content: string;
  thumbnail?: string;
}>;

export type JiraComment = Readonly<{
  id: string;
  author: JiraAuthor;
  body: string;
  updateAuthor: JiraAuthor;
  created: string;
  update: string;
  jsdPublic: boolean;
}>;

export type JiraChangelogEntry = Readonly<{
  author: JiraAuthor;
  created: string;
  field: string;
  from: string;
  to: string;
}>;

// NOTE this is NOT equal to JiraIssueOriginalReduced

export type JiraIssueReduced = Readonly<{
// copied data
  key: string;
  id: string;
  summary: string;
  components: JiraOriginalComponent[];
  timeestimate: number;
  timespent: number;
  description: string | null;

  updated: string;
  status: JiraOriginalStatus;

  // mapped data
  attachments: JiraAttachment[];
  assignee: JiraAuthor;

  // new properties (mapped)
  comments: JiraComment[];
  storyPoints?: number;
}>;

export type JiraIssue = JiraIssueReduced & Readonly<{
  changelog: JiraChangelogEntry[];
}>;

