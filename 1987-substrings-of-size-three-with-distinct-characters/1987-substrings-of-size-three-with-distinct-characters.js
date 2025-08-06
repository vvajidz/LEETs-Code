/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    
    let count = 0

    for(let i = 0 ; i < s.length - 2 ; i++){
        let a = s[i]
        let b = s[i + 1]
        let c = s[i + 2]

        if(a !== b && b !== c && a !== c){
            count++
        }
    }
    return count
};