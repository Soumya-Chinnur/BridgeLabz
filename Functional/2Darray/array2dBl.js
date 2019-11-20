const input = require('readline-sync')
exports.array2d = (row, col) => {
    try {
        var array = [];
        for (var i = 0; i < row; i++) {
            array.push([]);
            for (var j = 0; j < col; j++) {
                var element = input.question("Enter the number");
                array[i][j] = element;
            }
        }
        console.log(array);
    }
    catch (err) {
        console.log(err);

    }
}