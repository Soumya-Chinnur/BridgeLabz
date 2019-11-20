
exports.FlipCoin = (n) => {
    {
        var head = 0;
        var tail = 0;
        var x;
        for (let i = 0; i < n; i++) {
            if (n > 0) {
                x = Math.random();
                if (x > 0.5) {
                    head++;
                }
                else {
                    tail++;
                }
            }
        }
        const h_per = (head / n) * 100;
        const t_per = (tail / n) * 100;
        console.log(h_per);
        console.log(t_per);
    }
}