import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppsyncModule } from '@my/appsync';
import { AuthModule } from '@my/auth';
import { TodoUiModule } from '@my/todo-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule, AppsyncModule, TodoUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
