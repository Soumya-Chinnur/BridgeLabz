exports.harmonicNum = (n) => {

    var harmonic = 1;
    for (let i = 1; i < n; i++) {
        harmonic = harmonic + 1 / i;
    }
    console.log(harmonic);
}