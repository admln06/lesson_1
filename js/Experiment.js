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

// let result = '';
// const lines = 5;
// let n = 1;

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

// V = H^3 - формула объема куба.
// S = 6 * H^2 - формула площади полной поверхности куба. 

function calculateVolumeAndArea(H) {

    const V = H*H*H,
          S = 6 * H*H;
          
    if (H <= 0 || typeof(H) != 'number' || Math.round(H) != H) {
        return('При вычислении произошла ошибка')
    }
    
    return(`Объем куба: ${V}, площадь всей поверхности: ${S}`)

}

console.log(calculateVolumeAndArea(5));

function getCoupeNumber(P) {
    if (P < 0 || typeof(P) != 'number' || Math.round(P) != P) {
        return('Ошибка. Проверьте правильность введенного номера места')
    } else if (P === 0 || P > 36) {
        return('Таких мест в вагоне не существует')
    }
    return Math.ceil(P / 4)
}

console.log(getCoupeNumber(10));

"use strict";

function num(time){
    if (time < 0 || typeof(time) != 'number' || Math.round(time) != time) {
        return('Ошибка, проверьте данные')
    }
    let name_hour = 'часов',
        name_minut = 'минут',
        hours = 0,
        minuts = 0;
    hours = parseInt(time/60);
    minuts = time % 60;
    if (hours <= 10 || hours >= 20) {
        switch (hours % 10) {
            case 1:
                name_hour = 'час';
                break;
            case 2:
            case 3:
            case 4:
                name_hour = 'часа';
                break;
            default:
                name_hour = 'часов';
                break;
        }
    }
    if (minuts <= 10 || minuts >= 20) {
        switch (minuts % 10) {
            case 1:
                name_minut = 'минута';
                break;
            case 2:
            case 3:
            case 4:
                name_minut = 'минуты';
                break;
            default:
                name_minut = 'минут';
                break;
        }
    }
    return (`Это ${hours} ${name_hour} и ${minuts} ${name_minut}`)
}

console.log(num(250));


'use strict';
function Max(a,b,c,d) {
    if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number' || typeof(d) != 'number') {
        return (0)
    }
    let FMax = [a,b,c,d];
    let Max = FMax[0];
    for (let i = 0; i <= 4; i++) {
        if (FMax[i] > Max) {
            Max = FMax[i];
        }
    }
    return (Max)
}
console.log(Max(-1, 5, 6.6, 10.5));


'use strict';
function fib(Num) {
    let string = '';
    if (typeof(Num) !== 'number' || Num < 0 || !Number.isInteger(Num)) {
        return (string)
    }
    const masFib = [];
    masFib[0] = 0;
    masFib[1] = 1;
    for (let i = 2; i < Num; i++) {
        masFib[i] = masFib[i-1] + masFib[i - 2];
    }
    for (let i = 0; i < Num; i++) {
        string += masFib[i];
        if (i !== Num-1) {
            string += ',';
        }
    }
    return (string)
}

console.log(fib(10));


function firstTask() {
    // Пишем решение вот тут
    let result = '';
    for (let i = 5; i <= 10; i++) {
        if (i === 10) {
            result += i;
            break;
        }
        result += i +'\n';
    }
    return result;
}

console.log(firstTask());



function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i <= 16) {
       if (i % 2 === 0) {
         console.log(i);
         continue;
       } else {
         console.log(i);
       }
       if (i === 16) {
        break;
       }
       i++;
    } 
}

fourthTask();


function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [];
    console.log(data);

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) == 'number') {
            data[i] = data[i] * 2;
        } else {
            data[i] = data[i] + ' - done';
        }
    }
    
    // Не трогаем
    return data;
}

console.log(secondTask());

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 1; j <= lines - i; j++) {
        result += ' ';
    }
    for (let j = 1; j <= i; j++) {
        result += '**';
    }
    if (i < lines) {
        result += '*' + '\n';
    } else {
        result += '*';
    }
}

console.log(result);

function getMathResult(k, n) {
    if (n <= 0 || typeof(n) !== 'number') {
        return k;
    }
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += k*i;
        if (i !== n) {
            result += '---';
        }
    }
    return result;
}

console.log(getMathResult(3, 10));

function fib(num) {
    if (typeof(num) !== 'number' || !Number.isInteger(num) || num <= 0) {
        return ('')
    }
    let a = 0,
        b = 1;
    
    let c = a + b,
        result = '';
        
    result = a + ' ' + b;
    
    if (num <= 2) {
        return result
    }
    
    for (let i = 2; i < num; i++) {
        result += ' ' + c;
        a = b;
        b = c;
        c = a + b;
    }
    return result
}

console.log(fib(1));

const PlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

const {languages} = PlanPeter.skills;
console.log(languages);
console.log(PlanPeter);

// function showExperience(plan) {
//     const {exp} = plan['skills'];
//     return exp
// }

// console.log(showExperience(personalPlanPeter));


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const rest = plan['skills']['languages'].length;
        let result = `Мне ${age} и я владею языками: `;
        for (let i = 0; i < rest; i++) {
            if (i + 1 === rest) {
                result += `${plan['skills']['languages'][i].toUpperCase()}`
            } else {
                result += `${plan['skills']['languages'][i].toUpperCase()} `
            }
        }
        return result
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));



const someString = 'This is some strange string';

function reverse(str) {
    const rev = str.split('');
    str = '';
    for (let i = rev.length - 1; i >= 0; i--) {
         str += rev[i];
    }
    return str
}

console.log(reverse(someString));


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let S = 0;
    let V = 0;

    data.shops.forEach( function(item) {
        S += item.width * item.height;
    })
    
    V = data.height * S;
    let C = V * data.moneyPer1m3;
    
    if (data.budget - C >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }

    // let S = 0;
    
    // data.shops.forEach( function(item) {
    //     S += item.width * item.length;
    // });
    
    // const V = data.height * S;
    // const C = V * data.moneyPer1m3
    
    // if (C <= data.budget) {
    //     return 'Бюджета достаточно';
    // } else {
    //     return 'Бюджета недостаточно';
    // }
}

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];
// const arr = [[], [], []];
// let numberOfTeams = 0;
// let numberOfTeamMembers = 0;
// let str = `Оставшиеся студенты:`;

// students.sort().forEach(function (item, i){
//     numberOfTeamMembers = i % 3;

//     if (numberOfTeams < 3) {
//         arr[numberOfTeams][numberOfTeamMembers] = item;

//         if (numberOfTeamMembers === 2) {numberOfTeams++;}
//     } else if (numberOfTeams >= 3) {
//         str += ` ${item}`
//     }
// })
// if (str === `Оставшиеся студенты:`) {
//     str += ` -`;
// }
// arr.push(str);
// console.log(arr);

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

console.log(sortStudentsByGroups(students));

function createCounter() {
  let counter = 0
  const myFunction = function() {
    counter = counter + 1
    return counter
  }
  return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)







const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);







function makeCounter() {
    let count = 0;

    const myFunction = function() {
        count = count + 1;
        return count;
    };

    return myFunction;
}

let counter = makeCounter();
let counter2 = makeCounter();
let counter3 = makeCounter();

console.log(counter(), counter2(), counter3());