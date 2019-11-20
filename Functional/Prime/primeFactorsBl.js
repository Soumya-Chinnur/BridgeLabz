exports.primeFactors=(number)=>{

    for(let i=2; i<number; i++)
    {
        while(number%i==0)
        {
            console.log("prime factors" + i)
            number = number/2;
        }
        if(number>2)
        {
            console.log(number);
        }
    }
}