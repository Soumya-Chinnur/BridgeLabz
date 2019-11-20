
exports.FlipCoin = (number) => {
    {
        const head = 0;
        const tail = 0;
        const x;
        for (let i = 0; i < number; i++) {
            if (number > 0) {
                x = Math.random();
                if (x > 0.5) {
                    head++;
                }
                else {
                    tail++;
                }
            }
        }
        const h_per = (head / number) * 100;
        const t_per = (tail / number) * 100;
        console.log(h_per);
        console.log(t_per);
    }
}