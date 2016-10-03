import { Component, Input } from '@angular/core';
import { Issue, Label } from '../app.state';
import { AppActions } from '../app.actions';
import { AppDispatcher } from '../app.dispatcher';

@Component({
  selector: 'issues',
  template: `
    <h1>your issues and prs</h1>
    <input type="button" value="reload" (click)="onReload()" />
    <div *ngFor="let issue of issues">
      <span>{{head(issue)}}</span>
      <span *ngFor="let label of issue.labels">
        <issue-label [label]=label></issue-label>
      </span>
      <a href="{{ issue.html_url }}" target="_blank">{{ issue.title }}</a>
    </div>
  `
})
export class Issues {
  @Input() issues: Issue[];
  constructor(
    private actions: AppActions,
    private dispatcher: AppDispatcher
  ) { }
  head(issue: Issue): string {
    const kind = issue.pull_request ? 'PR' : 'issue';
    return `[${issue.repositoryName} ${kind}]`;
  }
  onReload() {
    this.dispatcher.emit(this.actions.fetchIssues());
  }
}
