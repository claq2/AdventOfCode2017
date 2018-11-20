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

let cornersDim1 = [1];
let cornersDim2 = [1, 2, 3, 4];

function dim(x) {
    if (x === 1) {
        return cornersDim1;
    } else if (x === 2) {
        return cornersDim2;
    } else {
        let currCorners = cornersDim2;
        for (let index = 3; index <= x; index++) {
            let firstCorner = currCorners[2];
            currCorners = [firstCorner, firstCorner + index - 1, firstCorner + (index - 1) * 2, firstCorner + (index - 1) * 3];

        }

        return currCorners;
    }
}

function findDim(y) {
    let currCorners = cornersDim1;
    let currDim = 1;
    do {
        currDim++;
        currCorners = dim(currDim);
    } while (currCorners.every(c => c <= y));

    return [currDim].concat(currCorners);
}

console.log(`Dim 1: ${dim(1)}`);
console.log(`Dim 2: ${dim(2)}`);
console.log(`Dim 3: ${dim(3)}`);
console.log(`Dim 4: ${dim(4)}`);
console.log(`Dim 5: ${dim(5)}`);
console.log(`Dim 6: ${dim(6)}`);
console.log(`Dim 590: ${dim(590)}`);
console.log(`Number 12 is in dim ${findDim(12)}`);
console.log(`Number 18 is in dim ${findDim(18)}`);
console.log(`Number 347991 is in dim ${findDim(347991)}`);

/*
 <--    590/2 - 1 = 294   --> <-- 590/2 = 295 ->
              <-- 185     -->
 348100 ... 347991 ... 347806 347805 ... 347511 A
    .                                         . |
    .                                         . 590/2 = 295
    .                                         . |
    .  ...                  1      2 ...      . V
    .                                         .
    .                                         .
 346333 ...                          ... 346922

 185 + 295 = 480
*/