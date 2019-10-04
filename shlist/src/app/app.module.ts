import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListeIndexComponent } from './pages/liste/liste-index/liste-index.component';
import { ListeCreateComponent } from './pages/liste/liste-create/liste-create.component';
import { ListeDetailsComponent } from './pages/liste/liste-details/liste-details.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DataDurService } from 'src/services/data-dur.service';
import { DataService } from 'src/services/data.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListeIndexComponent,
    ListeCreateComponent,
    ListeDetailsComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: environment.providers,
  bootstrap: [AppComponent]
})
export class AppModule {}
