var singleNumber = function(nums) {
        // const numsSet = new Set(nums)
    // const numsSetArr = Array.from(numsSet)
    // const numsDoubleArr = [...numsSetArr,...numsSetArr]
    // for(let i=0;i<nums.length;i++){
    //     if(numsDoubleArr.indexOf(nums[i])!==-1){
    //         numsDoubleArr.splice(numsDoubleArr.indexOf(nums[i]),1)
    //     }
    // }
    // return numsDoubleArr[0]
    
    const numsHash = {}
    for(let i=0; i<nums.length; i++){
        if(numsHash[nums[i]]){
            delete numsHash[nums[i]]
        }else{
            numsHash[nums[i]] = 1
        }
    }
    
    return Number(Object.keys(numsHash)[0])
};