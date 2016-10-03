import { Component, Input } from '@angular/core';
import { User } from '../app.state';
import { AppActions } from '../app.actions';
import { AppDispatcher } from '../app.dispatcher';

@Component({
  selector: 'user',
  template: `
    <h1>User</h1>
    <input [(ngModel)]="user.id" />
    <input type="password" [(ngModel)]="user.password" />
    <input type="submit" value="save" (click)="onSubmit($event)"/>
  `
})
export class UserComponent {
  @Input() user: User;
  constructor(
    private actions: AppActions,
    private dispatcher: AppDispatcher
  ) { }

  onSubmit(e: Event) {
    this.dispatcher.emit(this.actions.saveUserData(this.user));
  }
}
