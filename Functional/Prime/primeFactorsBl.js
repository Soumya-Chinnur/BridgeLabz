exports.primeFactors=(n)=>{

    for(var i=2; i<n; i++)
    {
        while(n%i==0)
        {
            console.log("prime factors" + i)
            n = n/2;
        }
        if(n>2)
        {
            console.log(n);
        }
    }
}