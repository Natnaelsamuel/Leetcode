/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let stack = [];
    let largest = 0;
    if (word1.length >= word2.length) largest = word1.length;
    else largest = word2.length;

    for (let i = 0; i < largest; i++) {
        if(i < word1.length) {
            stack.push(word1[i]);
        }
         if(i < word2.length) {
            stack.push(word2[i]);
        }
    }
    return stack.join("");
};