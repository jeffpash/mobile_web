import express from 'express';
import { DataDurService } from './services/data-dur.service';
import { Guid } from 'guid-typescript';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

const service = new DataDurService();
app.use((req, res, next) => {
  console.log('Requete ' + req.method + ' sur url : ' + req.url);
  next();
  console.log('Fin de Requete sur url : ' + req.url);
});
app.use(cors({ origin: 'http://localhost:4200' }));

// Liste les listes
app.get('/liste', async (req, res) => {
  var listes = await service.getListes();
  var resultats = listes.map(l => {
    return {
      id: l.id.toString(),
      lbl: l.libelle,
      nbi: l.items.length
    };
  });
  res.send(resultats);
});

// détail d'une liste
app.get('/liste/:id', async (req, res) => {
  var id = req.params.id;
  var liste = await service.getListe(Guid.parse(id));

  res.send({
    id: liste.id.toString(),
    lbl: liste.libelle,
    iurl: liste.imageUrl,
    nim: liste.nbItemsMax,
    t: liste.theme,
    dc: liste.dateCreation,
    d: liste.description,
    items: liste.items.map(i => {
      return {
        id: i.id.toString(),
        lbl: i.libelle,
        v: i.valide,
        dc: i.dateCreation
      };
    })
  });
});

app.delete('/liste/:idListe/item/:idItem', async (req, res) => {
  var idListe = req.params.idListe;
  var idItem = req.params.idItem;
  service.removeItemFromListe(Guid.parse(idItem), Guid.parse(idListe));
  res.send();
});

app.use(bodyParser.json());

app.post('/liste/:id', async (req, res) => {
  // L'id de la liste
  var id = req.params.id;

  // L'objet envoyé coté client
  var newItem = req.body;
  // J'utilise mon service DataDur pour ajouter l'item
  service.addItemToListe(Guid.parse(id), newItem.libelle);
  // Je termine la requete
  res.send();
});

app.listen(4201, () => {
  console.log('Le port est ouvert');
});
