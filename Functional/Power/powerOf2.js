/****************************************************************************************
 * @purpose: Power of 2 program
 * @author: Soumya Chinnur
 * @file: powerOf2.js
 * @since: 16-10-2019
 *****************************************************************************************/
const take = require("../Power/powerOf2Bl")
const read = require('readline-sync')
const number = read.question("Enter the number");
take.powerOf2(number);