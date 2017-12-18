// @ ts-check 

/**
 * 
 * 
 * @param {number} min 
 * @returns 
 */
function nextSquare(min) {
    let result = min;
    let sqrt = Math.sqrt(result);
    //console.log(`sqrt is ${sqrt}`);
    while (result % sqrt !== 0) {
        result++;
        sqrt = Math.sqrt(result);
    }

    return result;
}
/**
 * 
 * 
 * @param {number} min 
 * @returns {Array.<Array.<number>>} spiral
 */
function buildSpiral(min) {
    let x = 1;
    let spiral = [[x]];
    let max = nextSquare(min);
    let dimensionality = Math.sqrt(nextSquare(min)); // min = 2,3,4 then dim = 2; min = 5,6,7,8,9 then dim = 3
    if (min > 1) {
        if (dimensionality % 2 === 0) {
            // start bottom right, ->, ^ x dim - 1, <- x dim - 1
            spiral[spiral.length - 1].push(++x);
            for (let i = 0; i < dimensionality - 1; i++) {
                if (spiral.length - 1 - i === 0) {
                    // build next row 
                    let nextRow = [[++x]];
                    while (x < max){
                        nextRow[0] = [++x].concat(nextRow[0]);
                    }

                    spiral = nextRow.concat(spiral);
                } else {
                    // add to end of an existing row, starting at bottom
                    spiral[spiral.length - 1 - i].push(++x);
                }
            }
        } else {
            // start top left, <-, . x dim - 1, -> x dim - 1
            spiral[0] = [++x].concat(spiral[0]);
        }
    }
    // for (let i = 0; i < dimensionality; i++) {
    //     spiral.push([]);
    // }

    // if (min > 1) {
    //     for (let i = 0; i < dimensionality; i++) {
    //         if (i > 0) {
    //             spiral.push([]);
    //         }

    //         for (let j = 0; j < dimensionality; j++) {
    //             if (i !== 0 || j !== 0) {
    //                 spiral[i].push(2);
    //             }
    //         }
    //     }
    // }

    console.log(spiral);
    return spiral;
}


let nextSquare8 = nextSquare(9);
if (nextSquare8 !== 9) {
    console.error(`${nextSquare8} is not 9`);
} else {
    console.log('nextSquare8 is 9');
}

let nextSquare7 = nextSquare(7);
if (nextSquare7 !== 9) {
    console.error(`${nextSquare7} is not 9`);
} else {
    console.log('nextSquare7 is 9');
}

let nextSquare6 = nextSquare(6);
if (nextSquare6 !== 9) {
    console.error(`${nextSquare6} is not 9`);
} else {
    console.log('nextSquare6 is 9');
}

let nextSquare10 = nextSquare(10);
if (nextSquare10 !== 16) {
    console.error(`${nextSquare10} is not 16`);
} else {
    console.log('nextSquare10 is 16');
}

let nextSquare16 = nextSquare(16);
if (nextSquare16 !== 16) {
    console.error(`${nextSquare16} is not 16`);
} else {
    console.log('nextSquare16 is 16');
}

let nextSquare17 = nextSquare(17);
if (nextSquare17 !== 25) {
    console.error(`${nextSquare17} is not 25`);
} else {
    console.log('nextSquare17 is 25');
}

let nextSquare24 = nextSquare(24);
if (nextSquare24 !== 25) {
    console.error(`${nextSquare24} is not 25`);
} else {
    console.log('nextSquare24 is 25');
}

let spiral1 = buildSpiral(1);
let spiral4 = buildSpiral(4);
let spiral9 = buildSpiral(9);
let spiral25 = buildSpiral(25);

let expected1 = [[1]];
let expected4 = [[4, 3], [1, 2]];
let expected9 = [[5, 4, 3], [6, 1, 2], [7, 8, 9]];
let expected25 = [[17, 16, 15, 14, 13], [18, 5, 4, 3, 12], [19, 6, 1, 2, 11], [20, 7, 8, 9, 10], [21, 22, 23, 24, 25]];

function checkSpiral(expected, actual) {
    let result = true;
    if (actual.length !== expected.length) {
        console.error(`expected main array length ${expected.length} but was ${actual.length}`);
        result = false;
    }

    for (let i = 0; i < expected.length; i++) {
        const element = expected[i];
        if (actual[i].length !== element.length) {
            console.error(`expected array length at ${i} to be ${expected[i].length} but was ${actual[i].length}`);
            result = false;
        }
    }

    for (let i = 0; i < expected.length; i++) {
        const iElement = expected[i];
        for (let j = 0; j < iElement.length; j++) {
            const jElement = iElement[j];
            if (jElement !== actual[i][j]) {
                console.error(`expected ${i},${j} to be ${jElement} but was ${actual[i][j]}`);
                result = false;
            }
        }
    }

    return result;
}

// check 1
let pass1 = checkSpiral(expected1, spiral1);
if (pass1) {
    console.log('1 passed');
} else {
    console.error('1 failed');
}
// if (spiral1.length !== 1 || spiral1[0].length !== 1 && spiral1[0][0] !== 1) {
//     console.error('1 failed');
//     error1 = true;
// } else {
//     console.log('1 passed');
// }

let pass4 = checkSpiral(expected4, spiral4);
if (pass4) {
    console.log('4 passed');
} else {
    console.error('4 failed');
}

let pass9 = checkSpiral(expected9, spiral9);
if (pass9) {
    console.log('9 passed');
} else {
    console.error('9 failed');
}

let pass25 = checkSpiral(expected25, spiral25);
if (pass25) {
    console.log('25 passed');
} else {
    console.error('25 failed');
}

let errorCount = 0 + (pass1 ? 0 : 1) + (pass4 ? 0 : 1) + (pass9 ? 0 : 1) + (pass25 ? 0 : 1);
if (errorCount > 0) {
    console.error(`${errorCount} failures`);
} else {
    console.log('All pass');
}

// let spiral347991 = buildSpiral(347991);
// console.log(`spiral347991 length is ${spiral347991.length}`);
// console.log(`bottom right corner is ${spiral347991[spiral347991.length - 1][spiral347991.length -1]}`);