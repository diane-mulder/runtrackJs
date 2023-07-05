function sommenombrespremiers(a, b) {
  var somme = 0;

  for (var i = a; i <= b; i++) {
    if (estNombrePremier(i)) {
      somme += i;
    }
  }return somme;
  
}

// Fonction pour vérifier si un nombre est premier
function estNombrePremier(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Exemple d'appel de la fonction sommenombrespremiers avec les variables a = 1 et b = 10
var resultat = sommenombrespremiers(8, 7);
console.log("La somme des nombres premiers entre 8 et 7 est : " + resultat);
