
import data from "../assets/wordlist.json" assert { type: "json" };

let words = data.words;

console.log(words);


// const x = "13.25px";
// const y = false;
// const z = -654 / 6;
// const result = (z + y) * x;
// console.log(result);

// let color;
// color = "red";
// console.log(color);

// const msg = "bisous";
// console.log(msg);

// // const a = 11 / "Salut";
// // console.log(a);
// // console.log(typeof a);

// const word1 = "j'adore";
// const word2 = "les chats";
// const space = " ";
// console.log(word1 + " " + word2);
// console.log(word1 + space + word2);
// console.log(`${word1} ${word2}`);

// let results = new Date();
// console.log(results);

// let day = results.getDate();
// let month = results.getMonth();
// let year = results.getFullYear();

// const resultDate = `${day}-0${month + 1}-${year}`;

// console.log(resultDate);

// const decimal = 100 / 3;
// const roundedValue = Math.round(decimal);
// console.log(roundedValue);

// // --------------------------

// const a = parseFloat("43px");
// const b = Number(false);
// const c = parseFloat(" 0.423");
// const d = 64.09;

// calcul suivant : (a + b) / (d - c);

// const somme = (a + b) / (d - c);
// console.log(Math.round(somme));
// const somme2 = Math.round(somme);
// let somme3 = somme2.toFixed(3);
// console.log(somme3);

// let somme4 = Number(somme.toFixed(3));
// console.log(somme4);

// // Du coup, comment fait-on pour créer un objet user qui a un nom, un prénom, un email, un age et une adresse qui est elle même un objet composé d'une rue, d'une ville et d'un code postal ?

// let Tartonfion = {
//   nom: "Tarton",
//   prenom: "Fion",
//   age: 99,
//   email: "tartonfion@gmail.com",
//   adresse: {
//     numero: 13,
//     rue: "avenue tsoin tsoin",
//     codepostal: 33000,
//     ville: "Bordeaux",
//   },
// };

// console.log(Tartonfion);

// TABLEAU ARRAY

// const array = [34, 87, 72, 12, 54];
// array.push(63);
// console.log(array);
// console.log(array.length);
// console.log(array[2]);

// const lengthArray = array.length - 1;

// console.log(array[lengthArray]);
// console.log(array[array.length - 1]);

// let age = prompt("quel age avez vous?");
// if (age >= 18) {
//   console.log("t'es majeur");
// } else {
//   console.log("t'es mineur");
// }

// let num = 23;
// let txt = "33";

// console.log(txt + num);

// -----------------------------------------------------------------

// let car = {
//   doors: 4,
//   brand: "honda",
//   color: "red",
//   motor: {
//     power: 7,
//     weight: 100,
//     type: "vapeur",
//   },
//   passenger: [
//     {
//       name: "gisèle",
//       age: 33,
//       email: "gisele.truc@car.com",
//     },
//   ],
// };

// console.log(car);
// console.log(car.motor);

// -----------------------------------------------------------------
// const array = [34, 87, 72, 12, 54];
// const arrayLength = array.length;

// for (let i = 0; i < arrayLength; i++) {
//   let arrayNumbers = array[i];
//   console.log(arrayNumbers);
// }

// const array = [34, 87, 72, 12, 54];
// const arrayLength = array.length;

// let emptyArray = [];

// for (let i = 0; i < arrayLength; i++) {
//   let arrayNumbers = array[i];
//   emptyArray = [array[i]];
//   if (emptyArray > 40 && emptyArray % 2 === 0) {
//     console.log(emptyArray + "px");
//   }
//   // console.log(arrayNumbers + "px");
// }

// -------------------------------------------------

// let array = [];
// const max = 200;
// const min = 1;

// let smaller = 200;
// let bigger = 1;
// let array = getRandomInt();

// function getRandomInt(min, max) {
//   min = Math.ceil(2);
//   max = Math.floor(195);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for (let i = 0; i < 20; i++) {
//   const random = Math.floor(Math.random() * (max - min + 1)) + min;
//   array.push(random);
// }

// for (let i = 0; i < array.length; i++) {
//   const numbers = array[i];
//   if (numbers < smaller) {
//     smaller = numbers;
//   }
//   if (numbers > bigger) {
//     bigger = numbers;
//   }
// }
// console.log(`Le plus grand nombre est ${bigger}`);
// console.log(`Le plus petit nombre est ${smaller}`);

// -------------------------------------------------------------------

// const array = [34, 87, 72, 12, 54];

// const double = (a) => {
//   return a * 2;
// };

// let doubleTab = [];

// for (let i = 0; i < array.length; i++) {
//   let b = array[i];
//   const doubled = double(b);
//   console.log(doubled);
//   doubleTab.push(doubled);
// }

// console.log(doubleTab);

// console.log(array);

// -------------------------------------------------------------------------

// const arrayX2 = (a) => {
//   return a * 2;
// };

// let newArray = [arrayX2(array)];
// console.log(newArray);

// const triple = (a) => {
//   return a * 3;
// };

// const tabFunc = (tab, func) => {
//   const newTab = [];

//   for (let i = 0; i < tab.length; i++) {
//     const nbr = tab[i];
//     const newNbr = func(nbr);
//     newTab.push(newNbr);
//   }
//   return newTab;
// };

// const newTab = tabFunc(array, triple);
// console.log(newTab);

// Transformer la fonction tabFunc ci-dessus pour prendre en 2eme parametre une fonction qui s'executera sur chacun des elements du tableau (a la place de la fonction double)

// ------------------------------------------------------

// const firstname = ["lucas", "georges", "alexis", "antoine", "alexandre"];

// const func = (string) => {
//   return "Mr " + string;
// };

// const func2 = (array, funcs) => {
//   const array1 = [];
//   for (let i = 0; i < array.length; i++) {
//     let rightFirstName = funcs(array[i]);
//     array1.push(rightFirstName);
//   }
//   return array1;
// };

// console.log(func2(firstname, func));

// ---------------------------------------------------------
// entrainement html - js

// const ul = document.createElement("ul");
// const div = document.getElementById("div");
// div.append("ul");

// -----------------------------------------------------------
// squares entrainement

const element = document.getElementById("squares");

for (let i = 1; i < 7; i++) {
  const squaress = document.createElement("div");
  squaress.classList.add("square");
  squaress.classList.add(`square--${i}`); //cette ligne à re expliquer, pas la logique du i.
  // squaress.classList.add(`square`, `square--${i}`) - ou sur une seule ligne
  // squaress.innerHTML = `Test ${i}`; soluce pas bonnne

  const ul = document.createElement("ul");

  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.innerHTML = `Test ${i}`;
    ul.append(li);
    document.body.append(ul);
  }

  squaress.append(ul);

  element.append(squaress);
  // squaress.append(ul); soluce pas bonne
}

// const a = document.querySelector(".squares div:first-child");
// a.classList.add("square--1");

// const b = document.querySelector(".squares div:nth-child(2)");
// b.classList.add("square--2");

// const c = document.querySelector(".squares div:nth-child(3)");
// c.classList.add("square--3");

// const d = document.querySelector(".squares div:nth-child(4)");
// d.classList.add("square--4");

// const e = document.querySelector(".squares div:nth-child(5)");
// e.classList.add("square--5");

// const f = document.querySelector(".squares div:last-child");
// f.classList.add("square--6");

// --------------
//correction, si je voulais extraire la valeur de ma boucle for je mets a boucle dans une fonction, je return et je prends la valeur de cette fonction dans mon autre boucle for. On donne ensuite a la valeur de la boucle celle de la fonction, mais puis on la valeur de la boucle au html.

// const onClick = (event) => {
//   const liModified = document.getElementById("square");
//   liModified.style.display = "none";
// };

// element.addEventListener("click", onClick);

// ul.id = "list" dans une boucle,  -> `list--${i}`; on a le droit de mettre le i en parametre d'une fonction pour le récupérer ailleurs.

// correction

// div.addEvenListener("click", (event) => {
//   const target = event.target;
//   //console.dir(target);
  
//   let ul;


//   if (target.localName === "div") {
//     ul = target.firstChild;
//   } else if (target.localName === "li") {
//     ul = target.parentNode;
//   } else {
//     ul = target;
//   }

//   if (ul) {
//     ul.remove();
//   }
// })

// tout ça a placer dans le boucle ou div est défini

//----------------------------------------------------

const generate = () => {


  let sentence = "";


  let randomi = Math.floor(Math.random() * (8 - 4) + 4);


  for (let i = 1; i < randomi; i++) {

    let random = Math.floor(Math.random() * (words.length - 0) + 0);
    let word = words[random];
    sentence = sentence + word + " ";
  
  }
  return sentence

}

const sentenceButton = document.createElement("button");
sentenceButton.innerHTML = "Generate a sentence";

const body = document.querySelector("body");
body.append(sentenceButton);


const sentenceP = document.createElement("p");
sentenceP.id = "sentenceP";
body.append(sentenceP);

sentenceButton.addEventListener("click", (clickP) => {
  // p.innerHTML = sentence;
  let phrase = generate();
  document.getElementById("sentenceP").innerHTML = phrase; 
}) 

// generer un mot aleatoire, creer une liste avec toutes les lettres, un mot entre 3 et 7 lettres; pui scréer un bounton add html cliquez sur le obuton genere le mot;

const generateWord = () => {

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  let finishWord = "";

  let randomword = Math.floor(Math.random() * (8 - 4) + 4);

  for (let i = 1; i < randomword; i++) {
    let random = Math.floor(Math.random() * (alphabet.length - 0) + 0);
    let word = alphabet[random];
    finishWord = finishWord + word;
  }
  return finishWord
}

const button = document.createElement("button");

button.innerHTML = "Generate a word";
body.append(button);


const p = document.createElement("p");
p.id = "wordP";
body.append(p);

button.addEventListener("click", (clickP) => {
  
  document.getElementById("wordP").innerHTML = generateWord();
})


