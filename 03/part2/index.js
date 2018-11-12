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