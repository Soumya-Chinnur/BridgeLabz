exports.stopWatch = (start1, stop1) => {
    try {
        var d = new Date();//creating date object
        var start1 = d.getMilliseconds();
        console.log(start1);

        var d = new Date();
        var stop1 = d.getMilliseconds();//getMilliSeconds returns milliseconds of specified date 
        console.log(stop1);

        var elapsed = stop1 - start1;
        console.log(elapsed);
        console.log(elapsed / 100);
    }
    catch (err) {
        console.log(err);
    }
}

