/****************************************************************************************
 * @purpose:Find the euclidean distance. The formula to calculate distance = sqrt(x*x+y*y).Use Math.random()
 * @author:Soumya Chinnur
 * @file:euclideanDistanca.js
 * @since:15-10-2019
 *******************************************************************************************/
const take = require("../Distance/euclideanDistanceBl")
const read = require('readline-sync')
const n = read.question("enter the num");
const p = read.question("enter the element");
take.euclideanDistance(n, p)