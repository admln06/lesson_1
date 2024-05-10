"use strict";

// // const arr = [3, 5, 8, 16, 20, 23, 50];
// // const result = [];

// // // Пишем решение вот тут
// // console.log(arr.length);
// // for (let i = 0; i < arr.length; i++) {
// //    result[i] = arr[i];
// // } 
// // // Не трогаем
// // console.log(result);

// // const data = [5, 10, 'Shopping', 20, 'Homework'];

// // // Пишем решение вот тут
// // for (let i = 0; i < data.length; i++) {
// //    if (typeof(data[i]) === 'number') {
// //       data[i] *= 2;
// //    } else {
// //       data[i] += " - done";
// //    }
// // }

// // // Не трогаем
// // console.log(data);

// // const data = [5, 10, 'Shopping', 20, 'Homework'];
// // const result = [];

// // // Пишем решение вот тут
// // // for (let i = 0; i < data.length; i++) {
// // //    result[i] = data[data.length - i - 1];
// // // }

// // // Не трогаем
// // console.log(result);

// // let result = '';
// // const lines = 5;
// // let n = 1;

// for (let i = 0; i <= lines; i++) {

//    for(let j = lines - i; j > 0; j--) {
//       result += ' '; 
//    }
   
//    for(let j = 0; j < n; j++) {
//       result += '*';
//    }
//    n += 2;

//    if (i < lines) {
//       result += '\n';
//    }
// }

// console.log(result);

// let result = '';
// result = '         1';
// console.log(result);

function getMathResult(a, b) { 
   let result = '';
   if (typeof(b) === 'number' && b > 0) {
       for (let i = 1; i <= b; i++) {
           result += a * i;
           if (i != b) {
               result += '---';
           }
       }
   } else return a;
   return result
}

console.log(getMathResult(3, 3));