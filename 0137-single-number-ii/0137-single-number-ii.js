/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

const unique = nums.filter(n => nums.indexOf(n) === nums.lastIndexOf(n))[0]
return unique
};