/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    const map = {}

    for (let num of arr){
        map[num] = (map[num] || 0) + 1;
    }

    const count = Object.values(map)
    const uniq = new Set(count)

    return count.length == uniq.size
    
};