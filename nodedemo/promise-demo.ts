var DemandeAuService = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    var s = new Date().getSeconds();
    if (s % 2) {
      resolve(4);
    } else {
      reject('Pas ok');
    }
  }, 2000);
});

console.log('Le processeur continue de travailler');
DemandeAuService.catch(resultat => {
  console.log("Une erreur s'est produite");
});
DemandeAuService.then(resultat => {
  console.log('Le résultat est ' + resultat);
})
  .then(c => c * 2)
  .then(c => 'Le double du résultat est ' + c);
console.log('Le processeur continue de travailler');
