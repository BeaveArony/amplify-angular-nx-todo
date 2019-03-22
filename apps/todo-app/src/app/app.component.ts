import { Component, OnInit } from '@angular/core';
import { AppSyncClient } from '@my/appsync';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hydrated = false;
  isLoggedIn = false;

  constructor(private amplifyService: AmplifyService) {}

  ngOnInit(): void {
    AppSyncClient.hydrated().then(client => (this.hydrated = !!client));
    this.amplifyService.authStateChange$.subscribe(authState => {
      if (authState.state === 'signedOut' && this.isLoggedIn) {
        AppSyncClient.clearStore().then(() =>
          console.log('User signed out, store cleared!')
        );
      }
      this.isLoggedIn =
        authState.state === 'signedIn' || authState.state === 'confirmSignIn';
    });
  }
}
