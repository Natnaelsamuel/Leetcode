/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stacks = [];
    let stackt = [];

    for (let char of s) {
        if (char == '#') {
            stacks.pop();
        }else {
            stacks.push(char);
        }
    }
      for (let char of t) {
        if (char == '#') {
            stackt.pop();
        }else {
            stackt.push(char);
        }
    }

    let count = 0;
    for (let i = 0; i < stacks.length; i++) {
        if (stacks[i] == stackt[i]) {
            count++;
        }
    }
if(stacks >= stackt){
    if (count == stacks.length) return true;
}else {
    if (count == stackt.length) return true;
}
    return false;
};