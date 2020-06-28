var twoSum = function(nums, target) {
    //transform array of nums to hash table
//     const numsHash = nums.reduce((total,num,index)=>{
//    return {...total, [num]:index} 
//     }, {})
const numsHash = {}
    
    console.log(numsHash)
    
    //iterate the array of nums, try to find the target-number if it is in the hash talbe
    for(let i=0; i<nums.length; i++){
        console.log(numsHash[target-nums[i]])
          if(numsHash[target-nums[i]]!==undefined){
              return [i,numsHash[target-nums[i]]]
          }else{
              numsHash[nums[i]]=i
          }
      }
      return [-1,-1]
    
};