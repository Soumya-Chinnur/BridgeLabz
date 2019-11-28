exports.gambler = (stake, goal, number) => {
    const win = 0; //intializing win 
    const loss = 0; //intializing loss
    const total = 0; //intializing total 
    for (let i = 0; i < number; i++) {
        if (Math.random > 0.5) {//generating number between 0 and 1
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
        const w_per = (win / total) * 100; //percentage of win
        const l_per = (loss / total) * 100; //percentage of loss
        console.log(w_per);
        console.log(l_per);
    }
}