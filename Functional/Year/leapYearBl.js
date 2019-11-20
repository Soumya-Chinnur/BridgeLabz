exports.leapyear = (year) => {
    {
        try {
            if ((year % 400 == 0) && (year % 100 != 0) || (year % 4 == 0)) {
                console.log("leap year" + year);
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