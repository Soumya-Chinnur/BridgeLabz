//*******************************************************Insertin Sort**************************************************/
/**
 * @purpose:insertion sort
 * @author: SOumya Chinnur
 * @file: insertionSort.js
 * @since: 18-10-2019
 */
const take = require("../../Utility/algorithmUtility")
const read = require('readline-sync')
const n = read.question("enter the array range");
take.insertionSort(n);