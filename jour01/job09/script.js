function tri(numbers, order) {
    if (order === "asc") {
      return numbers.sort(function(a, b) {
        return a - b;
      });
    } else if (order === "desc") {
      return numbers.sort(function(a, b) {
        return b - a;
      });
    } else {
      console.log("Order should be 'asc' or 'desc'.");
      return numbers;
    }
  }
  
  // Exemple d'appel de la fonction tri avec un tableau de nombres et un ordre ascendant
  var numbers = [5, 2, 8, 1, 10];
  var orderedNumbersAsc = tri(numbers, "asc");
  console.log("Tableau trie par ordre ascendant : " + orderedNumbersAsc);
  
  // Exemple d'appel de la fonction tri avec un tableau de nombres et un ordre decroissant
  var orderedNumbersDesc = tri(numbers, "desc");
  console.log("Tableau trie par ordre decroissant : " + orderedNumbersDesc);
  