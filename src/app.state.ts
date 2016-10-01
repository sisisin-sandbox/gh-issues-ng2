import { State } from 'walts';

export interface AppState extends State {
  user: User;
}

export interface User {
  id: string;
  password: string;
}