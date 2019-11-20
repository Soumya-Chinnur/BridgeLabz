//*************************************************WindChill**********************************************************/
/**
 * @purpose:WindChill program. Use Math.pow(a,b) to compute ab. Given temperature t and speed v and prints wind chill
 * @aythor:Soumya Chinnur
 * @file:WindChill.js
 * @since:18-10-2019
 */
const take = require("../WindChill/WindChillBl")
const read = require('readline-sync')
var v = read.question("Enter the speed");
var t = read.question("Enter the temperature");
take.WindChill(v , t);