import { DataHttpService } from 'src/services/data-http.service';
import { DataService } from 'src/services/data.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { DataDurService } from 'src/services/data-dur.service';

export const environment = {
  production: true,
  appName: 'Shopping liste',
  serviceUrl: 'http://www.monservice.com',
  providers: [
    { provide: DataService, useClass: DataHttpService },
    MessageService
  ]
};
