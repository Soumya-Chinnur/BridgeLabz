//**************************************************************Anagram**************************************************/
/**
 * @purpose:One string is an anagram of another if the second is simply a rearrangment of the first
 * @author: Soumya Chinnur
 * @file:Anagram.js
 * @since:18-10-2019
 */
var take = require("../../Utility/algorithmUtility")
var read = require('readline-sync')
var str1 = read.question("Enter the String1");
var str2 = read.question("Enter the string2");
take.Anagram(str1, str2);