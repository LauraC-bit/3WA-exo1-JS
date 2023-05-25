const x = "13.25px";
const y = false;
const z = -654 / 6;
const result = (z + y) * x;
console.log(result);

let color;
color = "red";
console.log(color);

const msg = "bisous";
console.log(msg);

// const a = 11 / "Salut";
// console.log(a);
// console.log(typeof a);

const word1 = "j'adore";
const word2 = "les chats";
const space = " ";
console.log(word1 + " " + word2);
console.log(word1 + space + word2);
console.log(`${word1} ${word2}`);

let results = new Date();
console.log(results);

let day = results.getDate();
let month = results.getMonth();
let year = results.getFullYear();

const resultDate = `${day}-0${month + 1}-${year}`;

console.log(resultDate);

const decimal = 100 / 3;
const roundedValue = Math.round(decimal);
console.log(roundedValue);

// --------------------------

const a = parseFloat("43px");
const b = Number(false);
const c = parseFloat(" 0.423");
const d = 64.09;

// calcul suivant : (a + b) / (d - c);

const somme = (a + b) / (d - c);
console.log(Math.round(somme));
const somme2 = Math.round(somme);
let somme3 = somme2.toFixed(3);
console.log(somme3);

let somme4 = Number(somme.toFixed(3));
console.log(somme4);

// Du coup, comment fait-on pour créer un objet user qui a un nom, un prénom, un email, un age et une adresse qui est elle même un objet composé d'une rue, d'une ville et d'un code postal ?

let Tartonfion = {
  nom: "Tarton",
  prenom: "Fion",
  age: 99,
  email: "tartonfion@gmail.com",
  adresse: {
    numero: 13,
    rue: "avenue tsoin tsoin",
    codepostal: 33000,
    ville: "Bordeaux",
  },
};

console.log(Tartonfion);

// TABLEAU ARRAY

const array = [34, 87, 72, 12, 54];
array.push(63);
console.log(array);
console.log(array.length);
console.log(array[2]);

const lengthArray = array.length - 1;

console.log(array[lengthArray]);
console.log(array[array.length - 1]);
