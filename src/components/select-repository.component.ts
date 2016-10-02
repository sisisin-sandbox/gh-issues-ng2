import { Component, Input } from '@angular/core';
import { Repository } from '../app.state';
import { AppActions } from '../app.actions';
import { AppDispatcher } from '../app.dispatcher';

@Component({
  selector: 'select-repository',
  template: `
    <h1>select your repos.</h1>
    <div *ngFor="let repo of repositories; let i=index">
      <input [(ngModel)]="repo.owner" />
      <input [(ngModel)]="repo.name" />
      <input type="button" value="delete" (click)="onDelete(i)" />
    </div>
    <input type="button" value="add" (click)="add()" />
    <input type="submit" value="save" (click)="onSubmit($event)"/>
  `
})
export class SelectRepositoryComponent {
  @Input() repositories: Repository[];
  constructor(
    private actions: AppActions,
    private dispatcher: AppDispatcher
  ) { }
  add() {
    this.repositories.push({ owner: '', name: '' });
  }
  onSubmit() {
    this.dispatcher.emit(this.actions.saveRepositories(this.repositories));
  }
  onDelete(index: number) {
    this.repositories = this.repositories.filter((_, i) => i !== index);
    this.dispatcher.emit(this.actions.saveReposAndFetchIssues(this.repositories));
  }
}
