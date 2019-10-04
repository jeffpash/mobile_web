"use strict";
exports.__esModule = true;
var guid_typescript_1 = require("guid-typescript");
var ListeItem = /** @class */ (function () {
    function ListeItem() {
        this.valide = false;
        this.id = guid_typescript_1.Guid.create();
        this.dateCreation = new Date();
    }
    return ListeItem;
}());
exports.ListeItem = ListeItem;
