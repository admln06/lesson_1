"use strict";

// for (let i = 0; i < 3; i++) {
//    console.log(i);
//    for (let j = 0; j < 3; j++) {
//       console.log(j);
//    }
// }
// let x = '';

// for (let j = 0; j < 6; j++) {

//    console.log(x = x + '*');

// }

let result = '';
const length = 7

for (let i = 1; i < length; i++) {

   for(let j = 0; j < i; j++) {
      result += '*'; 
   }

   result += '\n';
}

console.log(result);

// first: for (let i = 0; i < 3; i++) {
//    console.log(`First level: ${i}`);
//    for (let j = 0; j < 3; j++) {
//       console.log(`Second level: ${j}`);
//       for (let k = 0; k < 3; k++) {
//          if (k === 2) continue first;
//          console.log(`Third level: ${k}`);
//       }
//    }
// }

for (let i = 2; i <= 10; i++) {
        
   if (i % 2 === 0) {
       
    console.log(i);
    
   }
   
} 

const M = [];
let x = 0;
for (let i = 5; i <= 10; i++) {
   M[x] = i;
   x++;
}
console.log(M);