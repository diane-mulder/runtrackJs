function jourtravaille(date) {
  var joursFeries2020 = [
    new Date(2020, 0, 1),   // Jour de l'An
    new Date(2020, 3, 13),  // Lundi de Paques
    new Date(2020, 4, 1),   // Fete du Travail
    new Date(2020, 4, 8),   // Victoire 1945
    new Date(2020, 4, 21),  // Ascension
    new Date(2020, 6, 14),  // Fete Nationale
    new Date(2020, 7, 15),  // Assomption
    new Date(2020, 10, 1),  // Toussaint
    new Date(2020, 10, 11), // Armistice 1918
    new Date(2020, 11, 25)  // Noel
  ];

  var jourSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  var jour = date.getDate();
  var mois = date.toLocaleString("fr-FR", { month: "long" });
  var annee = date.getFullYear();

  var jourSemaineTexte = jourSemaine[date.getDay()];
  var dateTexte = jourSemaineTexte + " " + jour + " " + mois+ " "+ annee;

  var estFerie = joursFeries2020.some(function(jourFerie) {
    return jourFerie.getDate() === jour && jourFerie.getMonth() === date.getMonth();
  });

  if (estFerie) {
    console.log("Le " + dateTexte + " est un jour ferie.");
  } else if (date.getDay() === 0 || date.getDay() === 6) { // les || signifie OU
    console.log("Non, " + dateTexte + " est un week-end.");
  } else {
    console.log("Oui, " + dateTexte + " est un jour travaille.");
  }
}

// Exemples d'appel de la fonction jourtravaille avec differentes dates
jourtravaille(new Date(2020, 6, 13)); // Jour ferie (14 juillet 2020)
jourtravaille(new Date(2020, 6, 12)); // Jour travaille (13 juillet 2020)
jourtravaille(new Date(2020, 6, 18)); // Week-end (19 juillet 2020)
