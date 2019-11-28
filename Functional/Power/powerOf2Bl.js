const readline = require("readline-sync")
exports.powerOf2 = (number) => {
    try {
        // const power = 1;
        let n = readline.question("enter number")
        if (number > 0 && number < 31) {
            for (let i = 0; i < n; i++) {
                power = math.pow(2, i); //to calculate power of number
                //return power;
                console.log("2^i=" + power);
            }

        }
        else {
            console.log("invalid input");
        }
    }
    catch (err) {
        console.log(err);
    }
    return parseInt(power);//parses an string amd return integer
}