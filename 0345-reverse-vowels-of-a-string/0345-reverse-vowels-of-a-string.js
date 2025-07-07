/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    let v = s.match(/[aeiouAEIOU]/g);
  return s.replace(/[aeiouAEIOU]/g, () => v.pop());

    
};