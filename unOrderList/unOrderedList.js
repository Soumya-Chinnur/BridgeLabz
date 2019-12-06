/*************************************************************
 * @purpose:Read the Text from a file, split it into words and 
 *          arrange it as Linked List. Take a user input to search
 *          a Word in the List. If the Word is not found then add
 *          it to the list, and if it found then remove the word from the List.
 *           In the end save the list into a file
 * @author:Soumya Chinnur
 * @file:unOrderedList.js
 * *******************************************************/
const fs = require("fs");//built in library to read file
let linkedList = require('../unOrderList/unOrderedListBL');
let readline = require("readline-sync");
let data = fs.readFileSync('stringList.txt');//read data from StringList.txt file
console.log("String data from file: \n\n" +data);
let stringArray = data.toString().toLocaleLowerCase().split('');//convert string data to array
let searchWord = readline.question("Enter a word to search: ");//user input to search element
linkedList.unOrderedList(stringArray, searchWord);
