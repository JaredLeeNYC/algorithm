/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr=[];
    if(!nums1.length||!nums2.length){
        newArr= nums1.length?nums1:nums2
    }else{
         let len = nums1.length+nums2.length-1
    let len1 = nums1.length-1
    let len2 = nums2.length-1
    
     
    while(len1>=0&&len2>=0){
       
        nums1[len--] = nums1[len1]>nums2[len2]? nums1[len1--]:nums2[len2--]
       
    }
    
     
    for(let i=0; i<=len2;i++){
        nums1[i]=nums2[i]
       
    }
      
        newArr = nums1
    }
   
    // console.log(newArr)
  
    
    if(newArr.length%2===0){
        return (newArr[newArr.length/2]+newArr[newArr.length/2-1])/2
    }else{
        return newArr[Math.floor(newArr.length/2)]
    }
    
    
};