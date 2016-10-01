import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';

import { AppActions } from './app.actions';
import { AppDispatcher } from './app.dispatcher';
import { AppStore } from './app.store';
import { AppState } from './app.state';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  providers: [
    AppActions,
    AppDispatcher,
    AppStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }