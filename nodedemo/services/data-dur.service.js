"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var data_service_1 = require("./data.service");
var liste_1 = require("../model/liste");
var liste_item_1 = require("../model/liste-item");
var DataDurService = /** @class */ (function (_super) {
    __extends(DataDurService, _super);
    function DataDurService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listeDeListe = [
            new liste_1.Liste({
                libelle: 'Les merveilles du monde',
                nbItemsMax: 20,
                theme: 'Géographie'
            }),
            new liste_1.Liste({
                libelle: 'Les meilleurs fromages',
                nbItemsMax: 20,
                theme: 'Alimentation'
            }),
            new liste_1.Liste({
                libelle: 'Les meilleurs chocolats',
                nbItemsMax: 10,
                theme: 'Alimentation'
            })
        ];
        return _this;
    }
    DataDurService.prototype.validateItemFromList = function (idItem, idListe, valide) {
        var liste = this.listeDeListe.find(function (l) { return l.id.equals(idListe); });
        if (!liste) {
            // Si pas trouvée, je rejete la promesse
            return Promise.reject(new Error("La liste n'existe pas"));
        }
        var item = liste.items.find(function (i) { return i.id.equals(idItem); });
        if (!item) {
            // Si pas trouvée, je rejete la promesse
            return Promise.reject(new Error("L'item n'est pas dans la liste"));
        }
        item.valide = valide;
        return Promise.resolve();
    };
    DataDurService.prototype.removeItemFromListe = function (idItem, idListe) {
        var liste = this.listeDeListe.find(function (l) { return l.id.equals(idListe); });
        if (!liste) {
            // Si pas trouvée, je rejete la promesse
            return Promise.reject(new Error("La liste n'existe pas"));
        }
        liste.items = liste.items.filter(function (c) { return !c.id.equals(idItem); });
        return Promise.resolve();
        //ou
        // var item = liste.items.find(i => i.id.equals(idItem));
        // if (!item) {
        //   // Si pas trouvée, je rejete la promesse
        //   return Promise.reject(new Error("L'item n'est pas dans la liste"));
        // }
        // liste.items.splice(liste.items.indexOf(item), 1);
    };
    DataDurService.prototype.addItemToListe = function (id, libelle) {
        // je cherche la liste
        var liste = this.listeDeListe.find(function (l) { return l.id.equals(id); });
        if (!liste) {
            // Si pas trouvée, je rejete la promesse
            return Promise.reject(new Error("La liste n'existe pas"));
        }
        // Je crée le nouveau ListeItem
        var nouvelItem = new liste_item_1.ListeItem();
        nouvelItem.libelle = libelle;
        // Je l'ajoute à la liste
        liste.items.push(nouvelItem);
        // Je déclare que la promesse est tenue
        return Promise.resolve();
    };
    DataDurService.prototype.getListes = function () {
        var _this = this;
        // cette fonction renvoit une promesse
        // qui renvoit la liste des listes
        // Au bout de 2 secondes
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.listeDeListe);
            }, 2000);
        });
    };
    DataDurService.prototype.getListe = function (id) {
        // Recherche de la liste dans le tableau
        var listeCherchee = this.listeDeListe.find(function (l) { return l.id.equals(id); });
        if (listeCherchee) {
            // Si trouvee, on résoud la promesse
            return Promise.resolve(listeCherchee);
        }
        else {
            // La promesse est rejetée
            return Promise.reject(new Error("La liste n'existe pas"));
        }
    };
    return DataDurService;
}(data_service_1.DataService));
exports.DataDurService = DataDurService;
