/* creer fonction avec parametre variable annee : 
function bisextile(annee) {
  // Verifier si l'annee est divisible par 4
  if (annee % 4 === 0) {
    // Si l'annee est divisible par 100, verifier aussi si elle est divisible par 400
    if (annee % 100 === 0) {
      return annee % 400 === 0;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
var annee = 2000;
var estBisextile = bisextile(annee);
console.log(estBisextile);*/

function fizzbuzz() {
  for (var i = 1; i<=151; i++){
    if (i % 3===0 && i%5!=0){
      console.log("Fizz");
    }else if (i % 5===0 && i%3 !=0){
      console.log("Buzz");
    }else if (i%3===0 && i%5===0){
      console.log("FizzBuzz");
    }else{
      console.log(i);
    }
  }
}
fizzbuzz()