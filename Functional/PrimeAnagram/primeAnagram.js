//************************************PrimeAnagram*****************************************************************/
/**
 * @purpose:find prime number that are Anagram and Palindrome
 * @author:Soumya Chinnur
 * @file:primeAnagram.js
 * @since:18-10-2019
 */
//const take = require("../PrimeAnagram/primeAnagramBl")
const util = require("../../Utility/algorithmUtility")
const read = require('readline-sync')
var primeArray = util.primeGenerate(1000);
var anagramPrimeArray = util.anagramprime(primeArray);
console.log(anagramPrimeArray);
var n = read.question("Enter the number");
var bubble = util.bubbleSort(n);