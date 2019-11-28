var read = require("readline-sync")
var take = require('../Palindrome/stringPalindromeBL')
var word = read.question("Enter a word to check palindrome");
if(word == "") throw "please enter a word"
take.checkPalindrome(word);