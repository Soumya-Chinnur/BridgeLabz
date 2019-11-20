//*************************************PrimeNumber********************************************************/
/**
 * @purpose: Take a range of 0-1000 Numbers and find the prime numbers in that range
 * @author: Soumya Chinnur
 * @file: primeRange.js
 * @since: 18-10-2019
 */
const take = require("../Rangeprime/primeRangeBl")
const read = require('readline-sync')
const number = read.question("Enter the number");
take.primeRange(number);