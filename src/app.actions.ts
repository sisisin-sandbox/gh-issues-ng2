import { Injectable } from '@angular/core';
import { Actions, Action } from 'walts';

import { AppState, User, Issue } from './app.state';

@Injectable()
export class AppActions extends Actions<AppState> {
  saveUserData(user: User): Action<AppState> {
    const {id, password} = user;
    if (id === '' || password === '') {
      console.log('require input id and password.');
    } else {
      localStorage.setItem('id', id);
      localStorage.setItem('password', password);
    }
    return (s) => Object.assign({}, s, { user });
  }
  fetchIssues(user: User): Action<AppState> {
    function fetchGitHub({id, password}: User, url: string) {
      const credentials = btoa(`${id}:${password}`);
      const headers = { Authorization: `Basic ${credentials}` };
      const params = `?assignee=${id}`;
      return fetch(`https://api.github.com${url}${params}`, { headers })
        .then<Issue>((res) => {
          if (res.status === 200) { return res.json(); }
          else { return Promise.reject(res.json()); }
        })
        .then(j => {
          console.log(j);
          return j;
        });
    }

    // todo: replace url hard coding.
    return () => fetchGitHub(user, '/repos/sisisin/onokori/issues')
      .then(issues => { return (state: AppState) => Object.assign({}, state, { issues }); });
  }
}
