const fs = require('fs');

fs.readFile('inputD5', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }

    const boardingPasses = data.trim().split('\n');
    const sorted = new Set(boardingPasses.map(x => getSeatID(x)).sort((a, b) => a - b)); 
    const max = Math.max(...sorted.values());

    // Part 1
    console.log(max);

    // Part 2
    sorted.forEach(val => {
        //Check if Set has next value
        if(!sorted.has(val + 1) && val !== max){
            console.log(val);
        }
    })

    // sorted.forEach((val, idx, arr) => {
    //     if((val - 1 !== arr[idx - 1] || val + 1 !== arr[idx + 1]) && idx != 0) {
    //         console.log(val);
    //     }
    // });
})

function getSeatID(pass) {
    //Cleaner once you know binary :)
    return parseInt(pass.replace(/B/g, 1).replace(/F/g, 0).replace(/R/g, 1).replace(/L/g, 0), 2);
}

// function getSeatID(boardingPass) {
//     let upper = 128;
//     let lower = 0;
//     let row = 0;
//     let column = 0;

//     boardingPass.slice(0, 7).split('').forEach((x, i) => {
//         if (i == 6) {
//             row = x === 'B' ? upper - 1 : lower;
//         }

//         if (x == 'B') {
//             lower = (lower + upper) / 2;
//         } else if (x == 'F') {
//             upper = (lower + upper) / 2;
//         }

//         //   	console.log(lower, upper, x, i);
//     });

//     upper = 8;
//     lower = 0;

//     boardingPass.slice(7).split('').forEach((x, i) => {
//         if (i == 2) {
//             column = x === 'R' ? upper - 1 : lower;
//         }

//         if (x === 'R') {
//             lower = (lower + upper) / 2;
//         } else if (x === 'L') {
//             upper = (lower + upper) / 2;
//         }
//     });

//     return row * 8 + column;
//     // console.log(boardingPass, row, column, row * 8 + column);
// }