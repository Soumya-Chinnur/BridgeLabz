/*********************************************************************************************
 * @purpose:prime factorization of N 
 * @author:Soumya Chinnur
 * @file:primeFactors.js
 * @since:16-10-2019
 *********************************************************************************************/
const take = require("../Prime/primeFactorsBl")
const read = require('readline-sync');
const number = read.question("enter the number");
take.primeFactors(number);