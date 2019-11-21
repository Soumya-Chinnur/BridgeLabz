//*************************************MergeSort***********************************************/
/**
*@purpose : Reads the strings prints them in sorted order using mergesort
*@file : mergeSort.js
*@author : Soumya Chinnur
*@since : 20-10-2019
**/ 
const util = require("../MergeSort/mergeSortBl")
const read = require('readline-sync')
const length = read.question("Enter total number of strings");
const unsortedArray = new Array(length);
for(let i = 0; i<length; i++)
{
    unsortedArray[i] = read.question("Enter the array" + i + "value :");
}
console.log("before sorting string array");
console.log(unsortedArray);
var sortedArray = new Array();
sortedArray = util.mergeSort(unsortedArray, 0 , unsortedArray.length-1);
console.log("After sorting string array");
console.log(sortedArray);
