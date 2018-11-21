const directions = {
    NORTH: 0,
    NORTHEAST: 1,
    EAST: 2,
    SOUTHEAST: 3,
    SOUTH: 4,
    SOUTHWEST: 5,
    WEST: 6,
    NORTHWEST: 7,
};

class Cell {
    constructor(number, location) {
        this.location = location;
        this.neighbours = [];
        this.number = number;
    }
}

let dim1Array = [[1]];
console.log('dim1Array');
console.log(dim1Array[0]);

let dim2Array = new Array(2);
dim2Array[0] = new Array(2);
dim2Array[0][1] = 2;
dim2Array[0][0] = 4;
dim2Array[1] = new Array(2);
dim2Array[1][0] = 1;
dim2Array[1][1] = 1;
console.log('dim2Array');
dim2Array.forEach(element => {
    console.log(element);
});

let dim3Array = new Array(3);
dim3Array[0] = [5].concat(dim2Array[0]);
dim3Array[1] = [10].concat(dim2Array[1]);
dim3Array[2] = [11, 23, 25];
console.log('dim3Array');
dim3Array.forEach(element => {
    console.log(element);
});


function dimArray(x) {
    if (x === 1) {
        return dim1Array;
    } else if (x === 2) {
        return dim2Array;
    }

    let previousArray = dim2Array.slice(0);
    let currArray;
    for (let currDim = 3; currDim <= x; currDim++) {
        currArray = new Array(currDim);
        if (currDim % 2 !== 0) {
            console.log('odd');
            // start in upper left corner, go down, then right
            // left side
            for (let j = 0; j < currDim; j++) {
                let sum = 0;
                if (j === 0) {
                    // if top left element, add old number to right and to down-right
                    sum = previousArray[j][0] + previousArray[1][0];
                } else if (j === currDim - 1) {
                    // if bottom left element, add previous number, and to up-right
                    sum = currArray[j - 1][0] + previousArray[previousArray.length - 1][0];
                } else {
                    // if other side element, add previous number, "all other neighbours to the right"
                    sum = currArray[j - 1][0];
                    // other neighbours are {y - 1, 0}, {y, 0}, {y + 1, 0} of previousArray
                    for (let n = -1; n < 2; n++) {
                        if (previousArray[j + n] !== undefined) {
                            sum += previousArray[j + n][0];
                        }
                    }
                }

                currArray[j] = [sum].concat(previousArray[j]);
            }

            // bottom
            for (let j = 1; j < currDim; j++) {
                let sum = 0;
                if (j === currDim - 1) {
                    // bottom right corner, add previous number, up and up-left
                    sum = currArray[currDim - 1][currDim - 2] + currArray[currDim - 2][currDim - 1] + currArray[currDim - 2][currDim - 2];
                } else {
                    // if other bottom element, add previous number, "all other neighbours above"
                    sum = currArray[currDim - 1][j - 1];
                    for (let n = -1; n < 2; n++) {
                        sum += currArray[currDim - 2][j + n];
                    }
                }

                currArray[currDim - 1][j] = sum;
            }
        } else {
            console.log('even');
            // start in bottom right corner, go up, then left
            currArray = previousArray.slice(0);
        }

        previousArray = currArray.slice(0);
    }

    return currArray;
}

let dim3ArrayCalc = dimArray(3);
console.log('dim3ArrayCalc');
dim3ArrayCalc.forEach(element => {
    console.log(element);
});

let dim4ArrayCalc = dimArray(4);
console.log('dim4ArrayCalc');
dim4ArrayCalc.forEach(element => {
    console.log(element);
});

const dim1 = new Cell(1, [0, 0]);

const dim2 = new Cell(1, [0, 0]); // dim2 = #1
dim2.neighbours[directions.EAST] = new Cell(1, [1, 0]);
let prevCell = dim2; // prevCell = #1
let currCell = dim2.neighbours[directions.EAST]; // currCell = #2
currCell.neighbours[directions.NORTH] = new Cell(2, [1, 1]);
currCell.neighbours[directions.WEST] = prevCell;
prevCell = currCell; // prevCell = #2
currCell = currCell.neighbours[directions.NORTH]; // currCell = #3
currCell.neighbours[directions.WEST] = new Cell(4, [0, 1]);
currCell.neighbours[directions.SOUTH] = prevCell;
prevCell = currCell; // prevCell = #3
currCell = currCell.neighbours[directions.WEST]; // currCell = #4
currCell.neighbours[directions.SOUTH] = dim1;
currCell.neighbours[directions.EAST] = prevCell;
// As items added, either there is a down+right, down+left, down+left+right, 

// either:
//   - odd dim - go left 1, down dim - 1, right dim - 1
//   - even dim - go right 1, up dim - 1, left dim - 1
