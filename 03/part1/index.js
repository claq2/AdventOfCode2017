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

class Cell {
    constructor(number, coords) {
        this.upCell = null;
        this.downCell = null;
        this.leftCell = null;
        this.rightCell = null;
        this.number = number;
        this.coords = coords;
    }
}

/**
 * 
 * 
 * @param {number} min 
 * @returns {Cell} spiral
 */
function buildSpiral(min) {
    let centreCell = new Cell(1, [0, 0]);
    let spiral = centreCell;
    let dimensionality = Math.sqrt(nextSquare(min)); // min = 2,3,4 then dim = 4; min = 5,6,7,8,9 then dim = 9
    // for (let i = 0; i < dimensionality; i++) {
    //     spiral.push([]);
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

let expected1 = new Cell(1, [0, 0]);

let expected4 = new Cell(1, [0, 0]);
expected4.rightCell = new Cell(2, [1, 0]);
expected4.rightCell.upCell = new Cell(3, [1, 1]);
expected4.rightCell.upCell.leftCell = new Cell(4, [0, 1]);

let expected9 = new Cell(1, [0, 0]);
expected9.rightCell = new Cell(2, [1, 0]);
expected9.rightCell.upCell = new Cell(3, [1, 1]);
expected9.rightCell.upCell.leftCell = new Cell(4, [0, 1]);

let expected25 = new Cell(1, [0, 0]);
expected25.rightCell = new Cell(2, [1, 0]);
expected25.rightCell.upCell = new Cell(3, [1, 1]);
expected25.rightCell.upCell.leftCell = new Cell(4, [0, 1]);

let right = [1, 0];
let left = [-1, 0];
let up = [0, 1];
let down = [0, -1];

let DirectionEnum = Object.freeze({ RIGHT: 0, UP: 1, LEFT: 2, DOWN: 3 });

function checkSpiral(expected, actual, currentDirection) {
    let result = true;
    if (currentDirection == null) {
        // Start by going right
        currentDirection = DirectionEnum.RIGHT;
    }

    if (actual == null) {
        console.log(`Found null cell at ${expected.coords}`);
        result = false;
    } else if (actual.coords[0] !== expected.coords[0] || actual.coords[1] !== expected.coords[1]) {
        console.error(`Expected coords ${expected.coords} but found ${actual.coords}`);
        result = false;
    } else if (actual.number !== expected.number) {
        console.error(`Expected ${expected.number} at ${expected.coords} but found ${actual.number}`);
        result = false;
    } else {

        switch (currentDirection) {
            case DirectionEnum.RIGHT:
                if (expected.rightCell != null) {
                    result = checkSpiral(expected.rightCell, actual.rightCell, currentDirection);
                } else if (expected.upCell != null) {
                    // Out of right cells, check up
                    result = checkSpiral(expected.upCell, actual.upCell, DirectionEnum.UP);
                }
                break;

            case DirectionEnum.UP:
                if (expected.upCell != null) {
                    result = checkSpiral(expected.upCell, actual.upCell, currentDirection);
                } else if (expected.leftCell != null) {
                    // Out of up cells, check left
                    result = checkSpiral(expected.leftCell, actual.leftCell, DirectionEnum.LEFT);
                }
                break;

            case DirectionEnum.LEFT:
                if (expected.leftCell != null) {
                    result = checkSpiral(expected.leftCell, actual.leftCell, currentDirection);
                } else if (expected.downCell != null) {
                    // Out of left cells, check down
                    result = checkSpiral(expected.downCell, actual.downCell, DirectionEnum.DOWN);
                }
                break;

            case DirectionEnum.DOWN:
                if (expected.downCell != null) {
                    result = checkSpiral(expected.downCell, actual.downCell, currentDirection);
                } else if (expected.rightCell != null) {
                    // Out of down cells, check right
                    result = checkSpiral(expected.rightCell, actual.rightCell, DirectionEnum.RIGHT);
                }
                break;
        }
    }
    return result;
}

// check 1
console.log('Checking 1');
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

console.log('Checking 4');
let pass4 = checkSpiral(expected4, spiral4);
if (pass4) {
    console.log('4 passed');
} else {
    console.error('4 failed');
}

console.log('Checking 9');
let pass9 = checkSpiral(expected9, spiral9);
if (pass9) {
    console.log('9 passed');
} else {
    console.error('9 failed');
}

console.log('Checking 25');
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