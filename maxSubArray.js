/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //     if(nums.length===1){
    //         return nums[0]
    //     }
    //     let sum = 0;
    //     let max = Number.MIN_SAFE_INTEGER;
        
    //     for(let i=0; i < nums.length; i++){
           
    //         for(let j=i+1; j<=nums.length;j++){
    //             for(let k=i; k<j; k++ ){
    //                  sum += nums[k]
    //             }
    //             if(sum>max){
    //                 max = sum;
    //             }
    //             sum = 0;
    //         }
    //     }
    //    return max
            let sum = 0;
            let max = Number.MIN_SAFE_INTEGER;
        
        for(let i=0; i<nums.length; i++){
            //deconstruct the problem to finding out the maximum total between 9 different gourps of subArray which group by ending up by each number in the nums array
            
            //how to find out the maximum total of each group?
            //1. if the length of subarray is 1, then the maximum tatal is the number itself   
            //2. there is an relation between each group with its last group, which is inserting the specific number of new group to the end of each subArray of last group, so the total maximum of the new group will be the maximum total of last group or itself, denpends on the maximum total of last group is bigger than 0 or not
            //3. save the biggest value in the variable max
            
            sum = sum>0?sum+nums[i]:nums[i]
            if(sum>max){
                max = sum
            }
        }
        
        return max
        
    };