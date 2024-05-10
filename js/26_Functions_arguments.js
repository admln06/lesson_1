"use strict"
const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

convert(500, usdCurr);
const res = convert(500, eurCurr);

promotion(convert(500, usdCurr));
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

function returnNeighboringNumbers(nNumber) {
    let massivNeigNumbers = [];
    for (let i = 0; i <= 2; i++) {
        switch (i) {
            case 0:
                massivNeigNumbers[0] = nNumber - 1;
                break;
                
            case 1:
                massivNeigNumbers[1] = nNumber;
                break;    
            
            default:
                massivNeigNumbers[2] = nNumber + 1;
        }
    }
    return massivNeigNumbers
}
console.log(returnNeighboringNumbers(5));

test();

function doNothing() {};
console.log(doNothing() === undefined);

function sayHello(sName) {
    let sHello = 'Привет,' + sName + '!';
    return sHello
}
console.log(sayHello('Антон'));