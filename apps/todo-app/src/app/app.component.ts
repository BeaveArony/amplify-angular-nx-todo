import { Component, OnInit } from '@angular/core';
import { AppSyncClient } from '@my/appsync';
// import { AmplifyService } from 'aws-amplify-angular';
import { Hub } from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import { AuthService } from '@my/auth';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hydrated = false;
  isLoggedIn = false;
  user: { id: string; username: string; email: string; };

  // constructor(private amplifyService: AmplifyService) {}
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    AppSyncClient.hydrated().then(client => (this.hydrated = !!client));
    this.authService.isLoggedIn$.subscribe(
      isLoggedIn => (this.isLoggedIn = isLoggedIn)
    );
    this.authService.auth$.subscribe(({ id, username, email }) => {
      this.user = { id, username, email };
    });
    // this.amplifyService.authStateChange$.subscribe(authState => {
    //   if (authState.state === 'signedOut' && this.isLoggedIn) {
    //     AppSyncClient.clearStore().then(() =>
    //       console.log('User signed out, store cleared!')
    //     );
    //   }
    //   this.isLoggedIn =
    //     authState.state === 'signedIn' || authState.state === 'confirmSignIn';
    // });

    // Auth.currentAuthenticatedUser().then(
    //   user => {
    //     console.log('User', user);
    //     this.isLoggedIn = true;
    //   },
    //   err => {
    //     console.warn('User', err);
    //     this.isLoggedIn = false;
    //   }
    // );

    // Hub.listen(
    //   'auth',
    //   data => {
    //     const { payload } = data;
    //     // this.onAuthEvent(payload);
    //     // console.log('Auth payload', payload);
    //     console.log(
    //       `A new auth event has happened: ${payload.data.username} ${
    //         payload.event
    //       }`,
    //       payload.message,
    //       payload
    //     );
    //     if (payload.event === 'signOut' && this.isLoggedIn) {
    //       AppSyncClient.clearStore().then(() =>
    //         console.log('User signed out, store cleared!')
    //       );
    //     }
    //     this.isLoggedIn =
    //       payload.event === 'signIn' || payload.event === 'confirmSignIn';
    //   },
    //   'LoginLogoutEvent'
    // );
  }
}
