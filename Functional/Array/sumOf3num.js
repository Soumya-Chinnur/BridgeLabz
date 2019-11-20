//**********************Sum Of 3 numbers to zero********************************************/
/**@purpose:A program with cublic running time. Read in N integer and count the number of triples that sum exactly to 0
@author:Soumya Chinnur
@file:sumOf3num.js
@since:15-10-2019
**/
const take = require("../Array/sumOf3numBl")
const read = require('readline-sync')
const number = read.question("Enter the number");
take.sumOf3num(number);
