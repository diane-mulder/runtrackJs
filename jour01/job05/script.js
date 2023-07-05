// creer une fonction sans parametre
function afficherjourssemaines() {
  var jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

  for (var i = 0; i < jourssemaines.length; i++) { //i++ => i=i+1
    console.log(jourssemaines[i]);
  }
}
// Appel de la fonction pour afficher les jours de la semaine
afficherjourssemaines();
  