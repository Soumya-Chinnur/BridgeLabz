/********************************************************************************************
 * @purpose : A palindrome is a string that reads the same forward and backward, for example, radar
 *            ,toot. We would like to construct an algorithm to input a string of characters 
 *            and check whether it is palindrome
 * @author : Soumya Chinnur
 * @file : stringpalindrome.js
 ********************************************************************************/
const read = require("readline-sync")
let take = require('../Palindrome/stringPalindromeBL')
const word = read.question("Enter a word to check palindrome");
if (word == "") throw "please enter a word"
take.checkPalindrome(word);