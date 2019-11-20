//*******************************************************Quadratic Equation**********************************************/
/**
 * @purpose:Quadratic equation to find the roots of the quation a*x*x + b*x + c
 * @author:Soumya Chinnur
 * @file.quadratic Equation.js
 * @since:16-10-2019
 */
const take = require("../quadequation/quadEquationBl")
const read = require('readline-sync')
const a = read.question("Enter the number");
const b = read.question("Enter the number");
const c = read.question("Enter the number");
take.quadEquation(a,b,c);