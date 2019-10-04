import { Component, OnInit, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/components/common/messageservice';
declare const device;
declare const cordova;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private messageService: MessageService, private zone: NgZone) {}
  applicationName = environment.appName;
  // Champs affiché dans la vue
  batteryStatus: string;
  reading: { x: number; y: number; z: number; magnitude: number };
  ngOnInit() {
    document.addEventListener('deviceready', () => {
      // this.zone.run : exécute une fonction
      // puis met à jour l'interface
      this.zone.run(() => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Infos Systems',
          detail: JSON.stringify(device)
        });
      });
      cordova.plugins.magnetometer.watchReadings(reading => {
        this.zone.run(() => {
          this.reading = reading;
        });
      });

      window.addEventListener('batterylow', status => {
        this.zone.run(() => {
          this.messageService.add({
            severity: 'warn',
            summary: 'Batterie',
            detail: 'La batterie est presque vide'
          });
        });
      });
      window.addEventListener('batterystatus', status => {
        this.zone.run(() => {
          this.batteryStatus = JSON.stringify(status);
        });
      });
    });
  }
}
