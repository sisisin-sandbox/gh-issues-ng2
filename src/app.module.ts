import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { HelloWorldComponent } from './components/hello-world.component';
import { Issues } from './components/issues.component';
import { SelectRepositoryComponent } from './components/select-repository.component';
import { LabelComponent } from './components/label.component';
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
    HelloWorldComponent,
    Issues,
    SelectRepositoryComponent,
    LabelComponent
  ],
  providers: [
    AppActions,
    AppDispatcher,
    AppStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
