exports.primeAnagram = (number) => {
    try {
        for (let no = 1; no <= number; no++) {//iterating till given number
            var temp = 0;
            for (let j = 2; j <= i - 1; j++) {//checking for prime number
                if (no % j == 0) { //if condition is statisfied then not a prime number
                    temp = temp + 1;
                }
            }
            if (temp == 0) {
                console.log(i);//printin prime numbers
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}