/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {

    let arr = []

    let n = nums.length

    for(let i = 0 ; i < n ; i++){
        arr[i] = nums[nums[i]]
    }
    return arr

    

    
    
};