
exports.replaceString = (str) => {
    {
        try {
            var String = "Hello <<Username>>, How are you?";
            var replace = String.replace("<<Username>>", str);
            console.log(replace);
        }
        catch (err) {
            console.log(err);
        }
    }
}