import { Guid } from 'guid-typescript';

export class ListeItem {
  constructor(o?: any) {
    this.id = Guid.create();
    this.dateCreation = new Date();
    Object.assign(this, o);
  }
  id: Guid;
  libelle: string;
  dateCreation: Date;
  valide = false;
}
