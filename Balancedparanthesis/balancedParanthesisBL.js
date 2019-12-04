BalParentheses = (exp) => {
    const Stk = require('../Balancedparanthesis/balancedNodeBL');
    arr = exp.toString().split('');
    let Stack1 = new Stk.Stack;
    arr.forEach(element => {
        if (element == '(' || element == '[' || element == '{') {//elements are pushed only when expression has these flower braces
            Stack1.push(element)
        } else if (element == ')' && Stack1.top.data == '(') { //else elements are popped
            Stack1.pop();
        } else if (element == ']' && Stack1.top.data == '[') {
            Stack1.pop();
        } else if (element == '}' && Stack1.top.data == '{') {
            Stack1.pop();
        }
    });
    Stack1.isEmpty()//if stack is empty then expression is said to be balanced
    if (Stack1.size === 0) {
        console.log("The Parentheses are Perfectly Balanced!");
    } else {
        console.log("The parentheses are Not Balanced");
    }
}
module.exports = {
    BalParentheses
}



