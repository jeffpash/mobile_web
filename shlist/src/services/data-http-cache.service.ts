import { Injectable } from '@angular/core';
import { DataHttpService } from './data-http.service';
import { HttpClient } from '@angular/common/http';
import { Liste } from 'src/model/liste';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class DataHttpCacheService extends DataHttpService {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getListesFromStorage() {
    var listeEnJson = localStorage.getItem('listes');
    var listeObjects = JSON.parse(listeEnJson);
    var listeListes = listeObjects.map(o => {
      var l = new Liste(o);
      l.id = Guid.parse(o.id.value);
      return l;
    });
    return listeListes;
  }

  dataPeremptionTimeEnS = 5;
  lastListesRequest: number;
  async getListes(): Promise<Liste[]> {
    if (
      localStorage.getItem('listes') &&
      Date.now() - this.lastListesRequest < this.dataPeremptionTimeEnS * 1000
    ) {
      // Ici, la requête a déjà été demandée au server récemment
      // Et on a les données dans le storage
      return Promise.resolve(this.getListesFromStorage());
    }
    try {
      // On essaye d'utiliser la requête sur le serveur
      var listes = await super.getListes();
      // Si ça marche on stocke les données dans le cache
      this.lastListesRequest = Date.now();
      localStorage.setItem('listes', JSON.stringify(listes));
      return listes;
    } catch (error) {
      // Sinon, on récupère les données du cache
      return this.getListesFromStorage();
    }
  }
}
