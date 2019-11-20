//**************************************************************Bubblesort*********************************************/
/**
 * @purpose:reads in integer and prints them in sorted array using Bubble Sort
 * @author:Soumya Chinnur
 * @file:bubbleSOrt.js
 * @since:18-10-2019
 */
const take = require("../../Utility/algorithmUtility")
const read = require('readline-sync')
const number = read.question("Enter the number");
//var a=[];
//for(var i=0; i<n; i++)
//{
//a[i] = read.question("Enter the elements");
//}
take.bubbleSort(number);