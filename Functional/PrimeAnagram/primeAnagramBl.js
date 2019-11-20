exports.primeAnagram = () => {
    try {
        for (var no = 1; no <= name; no++) {
            var temp = 0;
            for (var j = 2; j <= i - 1; j++) {
                if (no % j == 0) {
                    temp = temp + 1;
                }
            }
            if (temp == 0) {
                console.log(i);
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}