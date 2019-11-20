exports.gambler = (stake, goal, n) => {
    var win = 0;
    var loss = 0;
    var total = 0;
    for (var i = 0; i < n; i++) {
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
        var w_per = (win / total) * 100;
        var l_per = (loss / total) * 100;
        console.log(w_per);
        console.log(l_per);
    }
}