import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ListeIndexComponent } from './pages/liste/liste-index/liste-index.component';
import { ListeCreateComponent } from './pages/liste/liste-create/liste-create.component';
import { ListeDetailsComponent } from './pages/liste/liste-details/liste-details.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'liste/index', component: ListeIndexComponent },
  { path: 'liste/create', component: ListeCreateComponent },
  { path: 'liste/details/:id', component: ListeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
