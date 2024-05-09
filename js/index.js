const lines = 5;
let result = '';


let probcnt = lines
let starsLeft = ""
let starsRight = ""

for(let i = 0; i <= lines; i++) {
    let probels = ''
    for (let n = 0; n < probcnt; n++){
        probels += ' '
    }
    probcnt--

    starsLeft += "*"
    result += probels + starsLeft + starsRight + '\n'
    starsRight += "*"
}

console.log(result)