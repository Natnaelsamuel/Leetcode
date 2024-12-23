/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '+') {
            stack.push( ( stack[stack.length - 1] + stack[stack.length - 2] ) );
        } else if (operations[i] === 'D') {
            stack.push(stack[stack.length - 1] * 2);
        } else if (operations[i] === 'C') {
            stack.pop();
        } else {
            stack.push(parseInt(operations[i]));
        }
    }

    let sum = 0;
    for (let i = 0; i < stack.length; i++) {
        sum += stack[i];
    }

    return sum;
};