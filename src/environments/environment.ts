// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBase: 'http://localhost:4200/',
  weatherKey: '60cd0dc0048d10e5834fcc2dbf43d40b',
  darkskyApi: "https://api.darksky.net/forecast/60cd0dc0048d10e5834fcc2dbf43d40b",
  bingApi: 'https://dev.virtualearth.net/REST/v1/Locations?query=',
  bingKey: '&key=AvjrMlRn091eIi7yxjcXk8vODjjQuQJnJJD1giXeSyZsq-bUEZu6eFMdKC2-RcSl'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
