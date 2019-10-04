import { DataService } from 'src/services/data.service';
import { DataDurService } from 'src/services/data-dur.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { DataHttpCacheService } from 'src/services/data-http-cache.service';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Shopping liste (dev)',
  serviceUrl: 'http://localhost:4201',
  providers: [
    { provide: DataService, useClass: DataHttpCacheService },
    MessageService
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
