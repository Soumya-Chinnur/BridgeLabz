exports.primeFactors = (number) => {

    for (let i = 2; i < number; i++)//condtion to check prime factors
    {
        while (number % i == 0)//if the condition is satisfied i become prime factor
        {
            console.log("prime factors" + i)
            number = number / 2;
        }
        if (number > 2) {
            console.log(number);
        }
    }
}