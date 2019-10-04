"use strict";
exports.__esModule = true;
var guid_typescript_1 = require("guid-typescript");
var Liste = /** @class */ (function () {
    function Liste(o) {
        this.libelle = 'Nouvelle liste';
        this.nbItemsMax = 10;
        this.items = [];
        this.id = guid_typescript_1.Guid.create();
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
    return Liste;
}());
exports.Liste = Liste;
