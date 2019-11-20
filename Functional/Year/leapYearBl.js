exports.leapyear = (yr) => {
    {
        try {
            if ((yr % 400 == 0) && (yr % 100 != 0) || (yr % 4 == 0)) {
                console.log("leap year" + yr);
            }
            else {
                console.log("not leap year");
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}