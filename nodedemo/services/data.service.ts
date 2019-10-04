import { Liste } from '../model/liste';
import { Guid } from 'guid-typescript';

export abstract class DataService {
  abstract validateItemFromList(
    idItem: Guid,
    idListe: Guid,
    valide: boolean
  ): Promise<void>;
  abstract removeItemFromListe(idItem: Guid, idListe: Guid): Promise<void>;
  abstract getListes(): Promise<Liste[]>;
  abstract getListe(id: Guid): Promise<Liste>;
  abstract addItemToListe(id: Guid, libelle: string): Promise<void>;
}
