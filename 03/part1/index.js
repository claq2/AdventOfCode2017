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

function buildSpiral(min) {
    let spiral = [];
    let dimensionality = Math.sqrt(nextSquare(min));
    for (let i = 0; i < dimensionality; i++) {
        spiral.push([]);
    }

    for (let i = 0; i < dimensionality; i++) {
        for (let j = 0; j < dimensionality; j++) {
            spiral[i].push(1);
        }
    }

    return spiral;
}


let nextSquare8 = nextSquare(8);
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
let spiral9 = buildSpiral(9);
let spiral25 = buildSpiral(25);

// check 1
let error1 = false;
if (spiral1.length !== 1 || spiral1[0].length !== 1 && spiral1[0][0] !== 1) {
    console.error('1 failed');
    error1 = true;
} else {
    console.log('1 passed');
}

let error9 = false;
// check 9
if (spiral9.length !== 3) {
    console.error(`9 length is ${spiral9.length}`);
    error9 = true;
} else if (spiral9[0].length !== 3) {
    console.error(`9[0] length is ${spiral9[0].length}`);
    error9 = true;
} else if (spiral9[1].length !== 3) {
    console.error(`9[1] length is ${spiral9[1].length}`);
    error9 = true;
} else if (spiral9[2].length !== 3) {
    console.error(`9[2] length is ${spiral9[2].length}`);
    error9 = true;
}

let errors = 0 + error1 + error9;
if (errors > 0) {
    console.error(`${errors} failures`);
} else {
    console.log('All pass');
}