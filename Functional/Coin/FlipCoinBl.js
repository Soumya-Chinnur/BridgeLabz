exports.FlipCoin = (number) => {
    {
        const head = 0;
        const tail = 0;
        const x;
        for (let i = 0; i < number; i++) { //iterating untill number of flips of coin
            if (number > 0) {
                x = Math.random();//Math.random generates random number between 0 to 1
                if (x > 0.5) {
                    head++;
                }
                else {
                    tail++;
                }
            }
        }
        const h_per = (head / number) * 100;//perecentage of head 
        const t_per = (tail / number) * 100;//percentage of tail
        console.log(h_per);
        console.log(t_per);
    }
}