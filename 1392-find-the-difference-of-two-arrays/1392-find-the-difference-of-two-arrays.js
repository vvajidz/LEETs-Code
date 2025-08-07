/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let res1 = [];
    let res2 = [];
    for (let i = 0; i < nums1.length; i++) {
        let char1 = nums1[i];
        let found = false;

        for (let j = 0; j < nums2.length; j++) {
            if (char1 === nums2[j]) {
                found = true;
                break;
            }
        }

        if (!found && !res1.includes(char1)) {
            res1.push(char1);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        let char2 = nums2[i];
        let found = false;

        for (let j = 0; j < nums1.length; j++) {
            if (char2 === nums1[j]) {
                found = true;
                break;
            }
        }

        if (!found && !res2.includes(char2)) {
            res2.push(char2);
        }
    }

    return [res1, res2];
};
