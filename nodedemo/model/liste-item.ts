import { Guid } from 'guid-typescript';

export class ListeItem {
  constructor() {
    this.id = Guid.create();
    this.dateCreation = new Date();
  }
  id: Guid;
  libelle: string;
  dateCreation: Date;
  valide = false;
}
