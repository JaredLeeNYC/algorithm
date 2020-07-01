/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
 
    const result = [];
    const track = [];
    
    function backtrack(nums, track){
         if(track.length=== nums.length){
             // console.log("track",track)
             result.push([...track])
             // console.log("result",result)
        return
    }
  
    for(let i=0; i< nums.length; i++){
          if(!track.includes(nums[i])){
              track.push(nums[i])
            
              backtrack(nums,track)
              track.pop()
          }
      }
        
        
    }
  
   backtrack(nums,track)
    
  return result
    
};