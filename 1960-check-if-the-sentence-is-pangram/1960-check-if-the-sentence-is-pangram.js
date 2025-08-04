/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {

    

    let spellings  = "abcdefghijklmnopqrstuvwxyz"

    for(let i = 0 ; i < spellings.length ; i++){

        const char = spellings[i]
        if(!sentence.includes(char)){
            return false
        }
     
    }
    return true
    
};