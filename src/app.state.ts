import { State } from 'walts';

export interface AppState extends State {
  user: User;
  issues: Issue[];
}

export interface User {
  id: string;
  password: string;
}

export interface Issue {
  pull_request?: Object;
  title: string;
  repository: {
    name: string;
  };
}