/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length===1){
        return nums[0]
    }
    let result;


    const numsHash = nums.reduce((total,num,index)=>{
        if(total[num]+1>nums.length/2){
            result = num
     
        }
        return {...total, [num]:total[num]?total[num]+1:1} 
    }, {})
    

    return result
};