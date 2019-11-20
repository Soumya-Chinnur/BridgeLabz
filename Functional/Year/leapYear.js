//******************************************Leap Year**********************************************************************/
/**
 * @purpose:Leap Year program
 * @name: Soumya Chinnur
 * @file: leapYear.js
 * @since:16-10-2019
 */
const take  = require("../Year/leapYearBl")
const read = require('readline-sync')
const yr = read.question("Enter the year");
take.leapyear(yr);