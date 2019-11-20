exports.gambler = (stake, goal, number) => {
    const win = 0;
    const loss = 0;
    const total = 0;
    for (let i = 0; i < number; i++) {
        if (Math.random > 0.5) {
            stake = stake + 1;
            win++;
            total++;
            if (stake == goal) {
                console.log("you won");
            }
        }
        else {
            stake = stake + 1;
            loss++;
            total++;
            if (stake == 0) {
                console.log("you lost");
            }
        }
        const w_per = (win / total) * 100;
        const l_per = (loss / total) * 100;
        console.log(w_per);
        console.log(l_per);
    }
}