exports.powerOf2 = (number) => {
    try {
        const power = 1;
        if (number > 0 && number < 31) {
            for (let i = 0; i < n; i++) {
                power = power * 2;
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

}