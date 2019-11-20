//**********************************Harmonic Number****************************************************************/
/**
 * @purpose: Prints the Nth harmonic number
 * @author: Soumya Chinnur
 * @file: harmonicNum.js
 * @since: 16-10-2019
 */
const take = require("../Harmonic/harmonicNumBl")
const read = require('readline-sync');
var n = read.question("Enter the number");
take.harmonicNum(n)