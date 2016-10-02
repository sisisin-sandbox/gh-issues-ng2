import { Injectable } from '@angular/core';
import { Actions, Action } from 'walts';

import { AppState, User, ResIssue, Issue, Repository } from './app.state';

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

  fetchIssues(): Action<AppState> {
    function fetchGitHub({id, password}: User, url: string) {
      const credentials = btoa(`${id}:${password}`);
      const headers = { Authorization: `Basic ${credentials}` };
      const params = `?assignee=${id}`;
      return fetch(`https://api.github.com${url}${params}`, { headers })
        .then<ResIssue>((res) => {
          if (res.status === 200) { return res.json(); }
          else { return Promise.reject(res.json()); }
        })
        .then(j => {
          console.log(j);
          return j;
        });
    }

    return (state) => {
      const repos = state.repositories;
      return Promise.all<ResIssue[]>(repos.map(({owner, name}) => fetchGitHub(state.user, `/repos/${owner}/${name}/issues`)))
        .then(issuesList => {
          const issues = issuesList
            .map((issues, idx) => {
              return issues.map(issue => Object.assign({}, issue, { repositoryName: `${repos[idx].owner}/${repos[idx].name}` }));
            })
            .reduce((prev, cur) => [...prev, ...cur]);
          return (state: AppState) => Object.assign({}, state, { issues });
        });
    };
  }

  saveRepositories(repositories: Repository[]): Action<AppState> {
    if (repositories.length !== 0) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
    return (s) => Object.assign({}, s, { repositories });
  }
}
