//************************************************Permutation**********************************/
/**
 * @purpose : to return all permutation of string
 * @file : getallPermutation.js
 * @author : Soumya Chinnur
 * @since : 20-11-2019
 */
const read = require('readline-sync')
try {
    const take = require("../../Utility/algorithmUtility")
    //take one string
    const string = read.question("Enter one string");
    const result = util.getAllPermutation(string);
    console.log(result);
}
catch (err) {
    console.log(err);
}
