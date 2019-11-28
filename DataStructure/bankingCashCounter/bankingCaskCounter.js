/*****************************************************************************************
*@purpose : Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash. 
*           Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people. 
*           Maintain the Cash Balance.
* @file    :bankingCashCounter.js
* @author  : Soumya Chinnur
*********************************************************************************************/
var readline = require("readline-sync");
var balance = readline.question("Enter Initial Bank Balance"); //initial balance of bank
var people = readline.question("Enter Number Of People");     //Number of people in queue
var bank = require('./bankingQueue'); //import the bankingQueue.js file
bank.bankTransaction(balance, people); //queue operation
