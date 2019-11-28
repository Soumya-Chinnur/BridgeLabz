const input = require('readline-sync')
exports.array2d = (row, col) => {
    try {
        var array = [];//declaring array
        for (var i = 0; i < row; i++) {
            array.push([]);//adding new item to the end of array
            for (var j = 0; j < col; j++) {
                var element = input.question("Enter the number");
                array[i][j] = element;//2D array
            }
        }
        console.log(array);
    }
    catch (err) {
        console.log(err);

    }
}