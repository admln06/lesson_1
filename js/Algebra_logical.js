"use strict";

// const hamburger = 5;
// const fries = 1;

// if (hamburger && fries) {
//     console.log('Я сыт');
// }  

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dsfasfjalfksa;fa');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Я сыт');
// }  else {
//     console.log('Мы уходим');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны.');
}  else {
    console.log('Мы уходим');
} 

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);