/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
     let arr1 = s1.split(" ")
 let arr2 = s2.split(" ")

 let newarr = arr1.concat(arr2)
let words = newarr.filter((word)=>{
    return newarr.indexOf(word)==newarr.lastIndexOf(word)})
return words
    
};