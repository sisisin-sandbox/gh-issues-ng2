import { State } from 'walts';

export interface AppState extends State {
  user: User;
  issues: Issue[];
  repositories: Repository[];
}

export interface User {
  id: string;
  password: string;
}

export interface ResIssue {
  pull_request?: Object;
  title: string;
  html_url: string;
}

export interface Issue extends ResIssue {
  repositoryName: string;
}

export interface Repository {
  owner: string;
  name: string;
}
