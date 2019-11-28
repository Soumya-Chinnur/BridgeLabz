
exports.replaceString = (string) => {
    {
        try {
            var String = "Hello <<Username>>, How are you?";
            var replace = String.replace("<<Username>>", string);//replacing username with given string
            console.log(replace);
        }
        catch (err) {
            console.log(err);
        }
    }
}