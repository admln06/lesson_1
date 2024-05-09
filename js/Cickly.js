"use strict";

let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}


let i = 2;

while (i <= 16) {
   i++;
   if (i % 2 === 0 || i === 17) {
      continue;
   } else {
      console.log(i);
   }
}

for (let i = 2; i <= 16; i++) {
   if (i % 2 === 0) {
       continue;
   } else {
       console.log(i);
   }
}

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

for (let i = 1; i < 8; i++) {
     if(i === 6) {
        // break;
        continue;
     }
    console.log(i);
}