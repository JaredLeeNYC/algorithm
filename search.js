/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // return nums.indexOf(target)
    if(nums===null || nums.length ===0){
        return -1
    }
    let l=0, r=nums.length-1
    
    while(l<=r){
        if(target===nums[Math.floor((l+r)/2)]){
            return Math.floor((l+r)/2)
        }else if(target>nums[Math.floor((l+r)/2)]){
            l = Math.floor((l+r)/2)+1
        }else{
            r = Math.floor((l+r)/2)-1
        }
    }
    
    return -1
    
};