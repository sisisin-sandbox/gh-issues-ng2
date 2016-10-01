import { Injectable } from '@angular/core';
import { Actions, Action } from 'walts';

import { User } from './app.state';
import { AppState } from './app.state';

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
    return () => ({ user });
  }
}
