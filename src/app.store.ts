import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'walts';

import { AppState, Repository } from './app.state';
import { AppDispatcher } from './app.dispatcher';

function getUserFromLocalStorage() {
  const id = localStorage.getItem('id') ? localStorage.getItem('id') : '';
  const password = localStorage.getItem('password') ? localStorage.getItem('password') : '';
  return { id, password };
}
function getRepositoriesFromLocalStorage(): Repository[] {
  const repositories = localStorage.getItem('repositories');
  return repositories ? JSON.parse(repositories) : [];
}

function getInitialState(): AppState {
  const user = getUserFromLocalStorage();
  const repositories = getRepositoriesFromLocalStorage();
  return {
    user,
    repositories,
    issues: []
  };
}

@Injectable()
export class AppStore extends Store<AppState> {
  constructor(protected dispatcher: AppDispatcher) {
    super(getInitialState(), dispatcher);
  }
  get appState(): Observable<AppState> {
    return this.observable.map<AppState>(s => s);
  }
}
