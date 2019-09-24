// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  google: {
    maps_api_key: 'AIzaSyD1G-qhhlxaV9vPB_wl6N9f7yOzphJirmU',
    firebase: {
      apiKey: 'AIzaSyBTY4lOzrs0U84tR_VhENxvmIXHbWCrwsA',
      authDomain: 'nathan-haetty.firebaseapp.com',
      databaseURL: 'https://nathan-haetty.firebaseio.com',
      projectId: 'nathan-haetty',
      storageBucket: '',
      messagingSenderId: '917965703973',
      appId: '1:917965703973:web:a527c862d035fc47bca8cc',
    },
  },
  url_api: 'https://b45b997b.ngrok.io',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
