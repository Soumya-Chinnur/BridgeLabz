exports.leapyear = (year) => {
    {
        try {
            if ((year % 400 == 0) && (year % 100 != 0) || (year % 4 == 0)) {//leap year when it divisible by 400 and 4 years but not 100 years
                console.log("leap year" + year);//printing leap year
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