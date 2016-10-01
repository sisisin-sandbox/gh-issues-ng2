import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'walts';

import { AppState } from './app.state';
import { AppDispatcher } from './app.dispatcher';

const INIT_STATE: AppState = {
  user: { id: 'hoge', password: '' }
};

@Injectable()
export class AppStore extends Store<AppState> {
  constructor(protected dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }
  get appState(): Observable<AppState> {
    return this.observable
      .map<AppState>(s => s);
  }
}
