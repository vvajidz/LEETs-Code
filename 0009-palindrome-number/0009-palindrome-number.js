/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
let a = x.toString()
let b=''
for(i=a.length-1;i>=0;i--){
    b+=a[i]
}if(a==b){
    return true
}
else {
    return false
}
    

    
};