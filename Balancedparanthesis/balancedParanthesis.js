/**********************************************************
 * @purpose:Take an Arithmetic Expression such as 
 *          (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used 
 *          to order the performance of operations. Ensure parentheses must appear in a balanced fashion.
 * @author: Soumya Chinnur
 * @file: balancedParanthesis.js
 ************************************************************/
const BalPar = require('./balancedParanthesisBL')
let input = require('readline-sync');
let exp = input.question("Enter the expression: ")
BalPar.BalParentheses(exp);