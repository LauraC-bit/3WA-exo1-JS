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

const a = 11 / "Salut";
console.log(a);
console.log(typeof a);

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
