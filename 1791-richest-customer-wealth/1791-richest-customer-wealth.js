/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let arr = 0
    accounts.map((account) => {
        let customer = account.reduce((acc,val)=>acc+val)
        arr=Math.max(customer,arr)
    })
    return arr
};