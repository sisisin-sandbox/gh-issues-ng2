import { Component, Input } from '@angular/core';
import { User } from './app.state';

@Component({
  selector: 'hello-world',
  template: `
    <h1>Hello World!</h1>
    <div>{{ user.id }}</div>
  `
})
export class HelloWorldComponent {
  @Input() user: User;
  ngOnInit() {
    console.log(this.user);
  }
}
