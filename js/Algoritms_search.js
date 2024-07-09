"use strict";

// Линейный поиск
// const A = [3, 4, 2, 6, 1];
// const t = 6; 

function LinearSearch(t,A)      // t - искомый элемент,
{                               // A - массив, в котором ищем.
    var n = A.length, i = 0;   
    
    A[n] = t;
    
    while (A[i] !== t) i++;
                                
    if (i < n) return i;          // На выходе индекс искомого элемента.
    else return -1;               // Если искомого элемента нет в массиве, то -1.
}

console.log(LinearSearch(t,A));

// Бинарный (двоичный) поиск

// const A = [3, 4, 2, 6, 1];
// const t = 6; 

function BinarySearch(t,A)         // t - искомый элемент,
{                                  // A - упорядоченный массив, в котором ищем.
    var i = 0, j = A.length-1, k;   

    while (i <= j)
    {  k = Math.floor((i+j)/2);
       if (t === A[k]) return k;
       else if (t < A[k]) j = k-1;
       else i = k+1;
    }
                                   // На выходе индекс искомого элемента.
    return -1;                     // Если искомого элемента нет в массиве, то -1.
}

console.log(BinarySearch(t,A));

// Оптимизированный вариант

const A = [3, 4, 2, 6];
const t = 6; 

function BinarySearch(t,A)       // t - искомый элемент,
{                                // A - упорядоченный массив, в котором ищем.
    var i = 0, j = A.length, k; 
                                 
    while (i < j)                
    {  k = Math.floor((i+j)/2);
       if (t <= A[k]) j = k;
       else i = k+1;
    }
   
    if (A[ i ] === t) return i;     // На выходе индекс искомого элемента.
    else return -1;                 // Если искомого элемента нет в массиве, то -1.
}

console.log(BinarySearch(t,A));