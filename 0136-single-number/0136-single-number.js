/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
let value = 0

for(let i = 0 ; i < nums.length ; i++){
    let flag = 0
    for(let j = 0 ; j < nums.length ; j++){
        if(i!=j){
            if(nums[i] == nums[j]){
                flag++
            }
        }
    }
    if(flag==0){
        value += nums[i]
    }


}
return value
}
