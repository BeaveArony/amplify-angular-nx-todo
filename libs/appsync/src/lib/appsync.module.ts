import { NgModule } from '@angular/core';
import Api from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
// import Amplify from '@aws-amplify/core';
// import Analytics from '@aws-amplify/analytics';
// import Storage from '@aws-amplify/storage';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import * as localForage from 'localforage';
import config from './aws-exports';

Auth.configure(config);
Api.configure(config);
// Analytics.configure(config);
// Storage.configure(config);
// Amplify.configure(config);

export const AppSyncClient = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken()
  },
  complexObjectsCredentials: () => Auth.currentCredentials(),
  cacheOptions: { addTypename: true },
  offlineConfig: { storage: localForage }
});

@NgModule({
  exports: [AmplifyAngularModule],
  providers: [AmplifyService]
})
export class AppsyncModule {
  // constructor(apollo: Apollo) {
  //   apollo.setClient(AppSyncClient);
  // }
}
