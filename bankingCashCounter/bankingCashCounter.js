/*****************************************************************************************
*@purpose : Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash. 
*           Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people. 
*           Maintain the Cash Balance.
* @file    :bankingCashCounter.js
* @author  : Soumya Chinnur
*********************************************************************************************/
const readline = require("readline-sync");
let balance = readline.question("Enter Initial Bank Balance"); //initial balance of bank
let people = readline.question("Enter Number Of People");     //Number of people in queue
let bank = require('../bankingCashCounter/bankingCashCounterBL'); //import the bankingcashCounter.js file
bank.bankTransaction(balance, people); //queue operation
