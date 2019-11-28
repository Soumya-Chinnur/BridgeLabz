const fs = require("fs");//built in library to read file
var linkedList = require('../unOrderList/unOrderedListBL');
var readline = require("readline-sync");
var data = fs.readFileSync('stringList.txt');//read data from StringList.txt file
console.log("String data from file: \n\n" +data);
stringArray = data.toString().toLocaleLowerCase().split('');//convert string data to array
searchWord = readline.question("Enter a word to search: ");//user input to search element
linkedList.unOrderedList(stringArray, searchWord);
