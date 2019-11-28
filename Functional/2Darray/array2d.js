/****************************************************************************************
*@purpose:2DArray program.
*@author:Soumya Chinnur
*@file: array2d.js
*@since:15-10-2019
*******************************************************************************************/

const take = require("../2Darray/array2dBl");
const read = require('readline-sync');
const row = read.question("enter the row");
const col = read.question("Enter the column");
take.array2d(row, col);