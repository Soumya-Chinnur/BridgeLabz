exports.primeRange = (n) => {
    for (var i = 1; i <= n; i++) {
        var temp = 0;
        for (var j = 2; j <= i - 1; j++) {
            if (i % j == 0) {
                temp = temp + 1;
            }
        }
        if (temp == 0) {
            console.log(i);
        }
    }
    var sum = 0;
    var res = 0;
    var count;
    count = n;
    while (parseInt(n) > 0)//parseInt is necessary so that it wont take any extra decimal value
    {
        res = parseInt(n) % 10;
        //console.log(res);
        sum = (sum * 10) + parseInt(res);
        //console.log(sum);
        n = parseInt(n) / 10;
    }
    if (count == sum) {
        console.log("palindrome");
    }
    else {
        console.log("not palindrome");
    }
}
