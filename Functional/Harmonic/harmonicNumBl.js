exports.harmonicNum = (number) => {

    var harmonic = 1;//intializing harmonic
    for (let i = 1; i < number; i++) {
        harmonic = harmonic + 1 / i;
    }
    console.log(harmonic);
}