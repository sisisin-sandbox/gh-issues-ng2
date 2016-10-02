import { Component, Input } from '@angular/core';
import { Issue } from '../app.state';

@Component({
  selector: 'issues',
  template: `
    <h1>your issues and prs</h1>
    <div *ngFor="let issue of issues">
      <span>{{head(issue)}}</span>
      <a href="{{ issue.html_url }}" target="_blank">{{ issue.title }}</a>
    </div>
  `
})
export class Issues {
  @Input() issues: Issue[];
  constructor(
  ) { }
  head(issue: Issue): string {
    const kind = issue.pull_request ? 'PR' : 'issue';
    return `[${issue.repositoryName} ${kind}]`;
  }

}
