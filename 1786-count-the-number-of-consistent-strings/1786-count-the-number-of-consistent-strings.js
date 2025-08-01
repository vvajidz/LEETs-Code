/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
let result = 0;

for (let i = 0; i < words.length; i++) {
  let currentWord = words[i];

  for (let j = 0; j < currentWord.length; j++) {
    let currentChar = currentWord[j];

    let k = 0;
    for (; k < allowed.length; k++) {
      if (allowed[k] === currentChar) break;
    }

    if (k === allowed.length) {
      break;
    }
    if (j === currentWord.length - 1) {
      result++;
    }
  }
}

return result;
}