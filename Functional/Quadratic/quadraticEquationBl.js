exports.quadEquation = (a, b, c) => {
    try {
        var rootl = 0;
        var root2 = 0;
        var delta = Math.abs(b * b - 4 * a * c);
        root1 = (-b + Math.pow(delta, 1 / 2)) / (2 * a);//Math.pow calulating power of a number
        root2 = (-b + Math.pow(delta, 1 / 2)) / (2 * a);//finding roots of quadratic equation
        console.log(root1);
        console.log(root2);
    }
    catch (err) {
        console.log(err);
    }
}