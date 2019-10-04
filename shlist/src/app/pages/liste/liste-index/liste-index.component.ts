import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { DataService } from 'src/services/data.service';
import { Liste } from 'src/model/liste';
import { DataDurService } from 'src/services/data-dur.service';

@Component({
  selector: 'app-liste-index',
  templateUrl: './liste-index.component.html',
  styleUrls: ['./liste-index.component.scss']
})
export class ListeIndexComponent implements OnInit {
  constructor(private service: DataService) {}

  // A l'instanciation, la listeDeListe est undefined
  listeDeListe: Liste[];
  appName = environment.appName;

  ngOnInit() {
    // Le getListes renvoit la promesse

    this.service.getListes().then(resultat => {
      // Quand la promesse est résolue,
      // On a le résultat (la liste des listes)
      // et on le met dans this.listeDeListe
      // la vue affichera les données
      this.listeDeListe = resultat;
    });
  }
}
