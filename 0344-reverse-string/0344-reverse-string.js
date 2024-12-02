/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let stack = [];
    let reverse = [];

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }

    for (let i = 0; i < s.length; i++) {
        s[i] = stack.pop();
    }
};