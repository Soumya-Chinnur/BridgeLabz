/******************************************************************************************
 * @purpose:find prime number that are Anagram and Palindrome
 * @author:Soumya Chinnur
 * @file:primeAnagram.js
 * @since:18-10-2019
 ********************************************************************************************/
//const take = require("../PrimeAnagram/primeAnagramBl")
const util = require("../../Utility/algorithmUtility")
const read = require('readline-sync')
const primeArray = util.primeGenerate(1000);
const anagramPrimeArray = util.anagramprime(primeArray);
console.log(anagramPrimeArray);
const number = read.question("Enter the number");
const bubble = util.bubbleSort(number);