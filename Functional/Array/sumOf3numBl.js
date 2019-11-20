
exports.sumOf3num=(number)=>
{

    const arr = new Array(0, -1, 2, -3, 1);
    for(var i=0; i<number-2; i++)
    {
        for(var j=i+1; j<number-1; j++)
        {   
            for(var k=j+1; k<number; k++)
            {   
                if(arr[i]+arr[j]+arr[k]==0)
                {
                console.log("true");
                console.log(arr[i]);
                console.log(arr[j]);
                console.log(arr[k]);
                }
            }
        }
    }
    
}