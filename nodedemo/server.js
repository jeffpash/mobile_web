"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var data_dur_service_1 = require("./services/data-dur.service");
var guid_typescript_1 = require("guid-typescript");
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1["default"]();
var service = new data_dur_service_1.DataDurService();
app.use(function (req, res, next) {
    console.log('Requete ' + req.method + ' sur url : ' + req.url);
    next();
    console.log('Fin de Requete sur url : ' + req.url);
});
app.use(cors_1["default"]({ origin: 'http://localhost:4200' }));
// Liste les listes
app.get('/liste', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var listes, resultats;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, service.getListes()];
            case 1:
                listes = _a.sent();
                resultats = listes.map(function (l) {
                    return {
                        id: l.id.toString(),
                        lbl: l.libelle,
                        nbi: l.items.length
                    };
                });
                res.send(resultats);
                return [2 /*return*/];
        }
    });
}); });
// détail d'une liste
app.get('/liste/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, liste;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, service.getListe(guid_typescript_1.Guid.parse(id))];
            case 1:
                liste = _a.sent();
                res.send({
                    id: liste.id.toString(),
                    lbl: liste.libelle,
                    iurl: liste.imageUrl,
                    nim: liste.nbItemsMax,
                    t: liste.theme,
                    dc: liste.dateCreation,
                    d: liste.description,
                    items: liste.items.map(function (i) {
                        return {
                            id: i.id.toString(),
                            lbl: i.libelle,
                            v: i.valide,
                            dc: i.dateCreation
                        };
                    })
                });
                return [2 /*return*/];
        }
    });
}); });
app["delete"]('/liste/:idListe/item/:idItem', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var idListe, idItem;
    return __generator(this, function (_a) {
        idListe = req.params.idListe;
        idItem = req.params.idItem;
        service.removeItemFromListe(guid_typescript_1.Guid.parse(idItem), guid_typescript_1.Guid.parse(idListe));
        res.send();
        return [2 /*return*/];
    });
}); });
app.use(body_parser_1["default"].json());
app.post('/liste/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, newItem;
    return __generator(this, function (_a) {
        id = req.params.id;
        newItem = req.body;
        // J'utilise mon service DataDur pour ajouter l'item
        service.addItemToListe(guid_typescript_1.Guid.parse(id), newItem.libelle);
        // Je termine la requete
        res.send();
        return [2 /*return*/];
    });
}); });
app.listen(4201, function () {
    console.log('Le port est ouvert');
});
