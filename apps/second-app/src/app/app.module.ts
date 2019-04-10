import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppsyncModule } from '@my/appsync';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppsyncModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
