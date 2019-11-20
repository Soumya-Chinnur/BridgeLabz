//***********************************************************************Binary Search**********************************/
/**
 * @purpose:Binary Search
 * @Author: Soumya Chinnur
 * @file: binarySearch.js
 * @since:18-10-2019
 */
const take = require("../../Utility/BinarySearch/binarySearchBl")
const read = require('readline-sync')
var n = read.question("Enter the array size");
var a = new Array(n);//declaring array
for (let i = 0; i < n; i++)//taking elements of array
{
    a[i] = read.question("Enter the element to array");
}
var search = read.question("Enter the element to search");
var result = take.binarySearch(a, search);
if (result == -1) {
    console.log('Not found');
}
else {
    console.log("found");
}