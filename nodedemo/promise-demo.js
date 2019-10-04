"use strict";
var DemandeAuService = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var s = new Date().getSeconds();
        if (s % 2) {
            resolve(4);
        }
        else {
            reject('Pas ok');
        }
    }, 2000);
});
console.log('Le processeur continue de travailler');
DemandeAuService["catch"](function (resultat) {
    console.log("Une erreur s'est produite");
});
DemandeAuService.then(function (resultat) {
    console.log('Le résultat est ' + resultat);
})
    .then(function (c) { return c * 2; })
    .then(function (c) { return 'Le double du résultat est ' + c; });
console.log('Le processeur continue de travailler');
