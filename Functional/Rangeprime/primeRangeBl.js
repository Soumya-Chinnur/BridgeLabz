exports.primeRange = (number) => {
    for (var i = 1; i <= number; i++) {
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
    count = number;
    while (parseInt(number) > 0)//parseInt is necessary so that it wont take any extra decimal value
    {
        res = parseInt(number) % 10;
        //console.log(res);
        sum = (sum * 10) + parseInt(res);
        //console.log(sum);
        number = parseInt(number) / 10;
    }
    if (count == sum) {
        console.log("palindrome");
    }
    else {
        console.log("not palindrome");
    }
}
