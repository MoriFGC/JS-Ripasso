// ES 1
let c = document.getElementById("c");

c.addEventListener("click", function() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let d = document.querySelector(".d");
  let e = "";
  if (parseInt(a) === 50 || parseInt(b) === 50 || parseInt(a) + parseInt(b) === 50) {
         e = "Giusto."
       } else {
         e = "Sbagliato."
       };

       d.innerText = "Questo è il risultato " + e;
});

  // ES 2

  let frase = "ornitorinco";
  let posizione = 3;
  function two(string, position) {
    let arrayStringa = string.split("");
    arrayStringa.splice(position, 1);
    return arrayStringa.join("");
  }

console.log(two(frase, posizione));

  // ES 3

  function three(a, b) {
    if (a >= 40 && a <= 60 || b >= 70 && b <= 100) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  three(39, 69)

  // ES 4

  function four(city) {
    if (city.includes("Los") || city.includes("New")) {
      console.log("città approvata");
    } else {
      console.log("la città non va bene");
    }
  }

  four("New york")

  // ES 5
  let numeri = [2, 4, 6];
  let newArray = numeri.map( function five(a) {
    return a * 2
  })
 
console.log(newArray);

// ES 6

let x = [1, 2, 3, 4, 5];

function six(a) {
  for ( let i = 0; i <= a.length; i++) {
    if (a.includes(1) && a.includes(3)) {
      console.log(false);
    } else {
      console.log(true);
    }
  }
}

six(x)

// ES 7

// ES 8

let acronimo = "Associazione Bipolare Dal Uno Luglio"
function eight (a) {
  let TolgoLeMinuscole = /[^a-z]/g;
  results = a.match(TolgoLeMinuscole)
  results = results.filter(function(str) {
  return /\S/.test(str);
});
return results.toString().replaceAll(",", "")
}

console.log(eight(acronimo)); 

// Inizio gli Extra

// ES 1