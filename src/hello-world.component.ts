import { Component, Input } from '@angular/core';
import { User } from './app.state';
import { AppActions } from './app.actions';
import { AppDispatcher } from './app.dispatcher';

@Component({
  selector: 'hello-world',
  template: `
    <h1>Hello World!</h1>
    <input [(ngModel)]="user.id" />
    <input type="password" [(ngModel)]="user.password" />
    <input type="submit" value="save" (click)="onSubmit($event)"/>
  `
})
export class HelloWorldComponent {
  @Input() user: User;
  constructor(
    private actions: AppActions,
    private dispatcher: AppDispatcher
  ) { }

  onSubmit(e: Event) {
    this.dispatcher.emit(this.actions.saveUserData(this.user));
  }
}
