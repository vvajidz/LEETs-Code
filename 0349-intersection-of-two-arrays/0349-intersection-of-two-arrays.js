/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

   const arr = []

   for(let i = nums1.length-1 ; i >= 0 ; i--){
    for(let j = nums2.length-1 ; j >= 0 ; j--){
        if(nums1[i]===nums2[j] ){
            arr.push(nums1[i])
        }
    }
   }
   
   const result = [...new Set(arr)]
   return result
    
};