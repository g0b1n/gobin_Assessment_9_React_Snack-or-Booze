function unroll(squareArray) {

    // init empty array to store result
    const resultArray = [];

    let topRow = 0;
    let bottomRow = squareArray.length -1;
    let leftColumn = 0;
    let rightColumn = squareArray[0].length -1;
    // while have rows and columns left to traverse - when boundries have not collapsed
    while (topRow <= bottomRow && leftColumn <= rightColumn) {
        // traverse from left to right across the top boundary, adding those elements to result array
        for (let column = leftColumn; column <= rightColumn; column++){
            resultArray.push(squareArray[topRow][column]);
        }
        // narrow the top boundary/row( since we just traversed it)
        topRow++;

        // traverse from top to bottom down the right boundary, adding those elements to result array
        for (let row = topRow; row <= bottomRow; row++){
            resultArray.push(squareArray[row][rightColumn]);
        }
        // move the rightColumn left since we just traversed it
        rightColumn--;

        // Traverse from right to left across the bottom boundary
        if (topRow <= bottomRow){
            // check to ensure we still have rows to traverse
            for (let column = rightColumn; column >= leftColumn; column--){
                resultArray.push(squareArray[bottomRow][column]);
            }
            // move the bottomRow up
            bottomRow--;
        }

        // Traverse from bottom to top up the left boundary
        if (leftColumn <= rightColumn){
            // check to ensure we still have colums to traverse
            for (let row = bottomRow; row >= topRow; row--){
                resultArray.push(squareArray[row][leftColumn]);
            }
            // move the leftColumn right since we just traversed it
            leftColumn++;
        }
    }
    return resultArray;
}

module.exports = unroll;
