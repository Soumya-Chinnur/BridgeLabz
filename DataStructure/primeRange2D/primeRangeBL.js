exports.primeRange = (start,end) => {
        let array = [];
        for (let i = start; i <= end; i++) {
            var temp = 0;
            for (let j = 2; j <= i - 1; j++) {
                if (i % j == 0) {
                    temp = temp + 1;
                }
            }
            if (temp == 0) {
            array.push(i);
            }
            
        }
        return array;
}