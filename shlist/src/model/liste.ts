import { Guid } from 'guid-typescript';
import { ListeItem } from './liste-item';
export class Liste {
  constructor(o?: any) {
    this.id = Guid.create();
    this.dateCreation = new Date();
    //#region comment
    // Construction de la liste
    // basée sur un objet o
    // dont on copie les propriétés sur this
    // for (var p in o) {
    //   this[p] = o[p];
    // }
    //#endregion
    Object.assign(this, o);
  }
  id: Guid;
  libelle: string = 'Nouvelle liste';
  theme: string;
  imageUrl: string;
  description: string;
  dateCreation: Date;
  nbItemsMax = 10;
  items: ListeItem[] = [];
}
