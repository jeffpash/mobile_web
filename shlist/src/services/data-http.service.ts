import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Guid } from 'guid-typescript';
import { Liste } from 'src/model/liste';
import { HttpClient } from '@angular/common/http';
import { ListeItem } from 'src/model/liste-item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataHttpService extends DataService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  validateItemFromList(
    idItem: Guid,
    idListe: Guid,
    valide: boolean
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }
  removeItemFromListe(idItem: Guid, idListe: Guid): Promise<void> {
    return this.httpClient
      .delete<void>(
        environment.serviceUrl +
          '/liste/' +
          idListe.toString() +
          '/item/' +
          idItem.toString()
      )
      .toPromise();
  }
  getListes(): Promise<Liste[]> {
    return (
      this.httpClient
        // Envois la requête sur le serveur
        .get<any[]>(environment.serviceUrl + '/liste')
        // Crée une promesse avec le resultat
        // Le resultat est un tableau
        .toPromise()
        // Crée une nouvelle promesse avec un tableau de dto
        // {"id":"f6bd8aea-e391-0f3b-40aa-32b5890f9b7d","lbl":"Les merveilles du monde","nbi":0}
        // `${dto.lbl} (${dto.nbi})` = dto.lbl +'('+dto.nbi+')'
        .then(tab =>
          tab.map(
            dto =>
              new Liste({
                id: Guid.parse(dto.id),
                libelle: `${dto.lbl} (${dto.nbi})`
              })
          )
        )
    );
  }
  getListe(id: Guid): Promise<Liste> {
    return (
      this.httpClient
        // Requete vers le serveur
        .get<any>(`${environment.serviceUrl}/liste/${id.toString()}`)
        // On obtient la promesse
        .toPromise()
        // On transforme l'objet recu
        // {"libelle":"Les merveilles du monde","nbItemsMax":20,"items":[],"id":{"value":"b7f40fb3-cbb5-bfe9-77e7-167ef94a185c"},"dateCreation":"2019-10-02T12:00:15.629Z","theme":"Géographie"}
        // En liste avec le constructeur de Liste
        .then(dto => {
          return new Liste({
            id: Guid.parse(dto.id),
            libelle: dto.lbl,
            description: dto.d,
            imageUrl: dto.iurl,
            nbItemsMax: dto.nim,
            dateCreation: dto.dc,
            theme: dto.t,
            items: dto.items.map(
              item =>
                new ListeItem({
                  id: Guid.parse(item.id),
                  libelle: item.lbl,
                  dateCreation: item.dc,
                  valide: item.v
                })
            )
          });
        })
    );
  }
  addItemToListe(id: Guid, libelle: string): Promise<void> {
    return this.httpClient
      .post<void>(environment.serviceUrl + '/liste/' + id.toString(), {
        libelle
      })
      .toPromise();
  }
}
