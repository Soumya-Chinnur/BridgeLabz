//*************************************Gambler********************************************************/
/**
 * @purpose:simulates a gambler who start with $stake and place fair $1 bets untill he/she goes broke or reach $goal. 
 * keeps track of number of times he/she wins and the number of bets he/she amkes. Run the experiment N times, avg the result
 * and print them
 * @author: Soumya Chinnur
 * @file:gambler.js
 * @since:16-10-2019 */
const take = require("../Gambler/gamblerBl")
const read = require('readline-sync')
const stake = read.question("Enter num of stake");
const goal = read.question("Enter the num of goal");
const n = read.question("Enter the number");
take.gambler(stake, goal, n)