import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsyncModule } from '@my/appsync';
import { AuthService } from './auth.service';

@NgModule({
  imports: [CommonModule, AppsyncModule]
})
export class AuthModule {
  constructor(_auth: AuthService) {
    console.log('starting auth service');
  }
}
