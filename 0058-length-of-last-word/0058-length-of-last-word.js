/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let splitted = s.trim().split(" ")
    let length = splitted[splitted.length -1]
    return length.length

    
};