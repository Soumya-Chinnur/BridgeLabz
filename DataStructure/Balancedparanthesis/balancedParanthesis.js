const BalPar = require('./balancedParanthesisBL')
let input = require('readline-sync');
let exp = input.question("Enter the expression: ")
BalPar.BalParentheses(exp)