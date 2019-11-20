//***********************************************FlipCoin***********************************************************/
/**
 * @purpose: The number of times to flip coin
 * @author: Soumya Chinnur
 * @file: FlipCoin.js
 * @since: 15-10-2019
 */
const take = require("./FlipCoinBl")
const read = require('readline-sync')
const n = read.question("Enter the number");
take.FlipCoin(n)