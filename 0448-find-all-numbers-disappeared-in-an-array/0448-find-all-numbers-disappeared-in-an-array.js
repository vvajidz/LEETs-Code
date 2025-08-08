/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    const result = [];
    
    const numSet = new Set(nums);
    
    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            result.push(i);
        }
    }
    
    return result;
};
