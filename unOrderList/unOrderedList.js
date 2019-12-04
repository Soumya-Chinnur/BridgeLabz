const fs = require("fs");//built in library to read file
let linkedList = require('../unOrderList/unOrderedListBL');
let readline = require("readline-sync");
let data = fs.readFileSync('stringList.txt');//read data from StringList.txt file
console.log("String data from file: \n\n" +data);
let stringArray = data.toString().toLocaleLowerCase().split('');//convert string data to array
let searchWord = readline.question("Enter a word to search: ");//user input to search element
linkedList.unOrderedList(stringArray, searchWord);
