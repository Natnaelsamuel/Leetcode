/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let storage = [];

    for (let i=0; i<s.length; i++) {
        if (s[i] == '(') {
            for (let j=i; j<s.length; j++) {
                if (s[j] == ')')
                storage[0] = true;
            }
        }else if (s[i] == '[') {
            for (let j=i; j<s.length; j++) {
                if (s[j] == ']')
                storage[1] = true;
            }
        }else if (s[i] == '{') {
            for (let j=i; j<s.length; j++) {
                if (s[j] == '}')
                storage[2] = true;
            }
        }
    }
    if (storage[0] == true && storage[1] == true && storage[2] == true){
        return true
    }
    if (storage[0] == true) return true;
    else if (storage[1] == true) return true;
    else if (storage[2] == true) return true;
    else return false;
};