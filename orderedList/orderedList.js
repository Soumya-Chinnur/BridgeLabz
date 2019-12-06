/************************************************************
 * @purpose: Read .a List of Numbers from a file and arrange it 
 *           ascending Order in a Linked List. Take user input
 *           for a number, if found then pop the number out of 
 *           the list else insert the number in appropriate 
 *           position
 * @author:Soumya Chinnur
 * @file: orderedListBl.js
 ************************************************************/
const fs = require("fs"); //built in library for read file
const linkedList = require('./orderedListBL'); //import the orderedlinkedlist.js file
const readline = require("readline-sync");
const data = fs.readFileSync('./NumberList.txt'); //read the data from StringList.txt file
console.log("Numbers data read from file: \n\n" + data);
let searchNumber = readline.question("Enter a number to search"); //user input to search element
linkedList.orderedList(data, searchNumber); //  