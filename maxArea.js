/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //     if(height.length===2){
    //         return Math.min(height[0],height[1])
    //     }
        
    //     let max = 0;
        
    //     for(let i=2; i<height.length; i++){
          
    //         for(let j=0; j<i; j++){
    //             if(Math.min(height[j], height[i])*(i-j)>max){
    //                 max = Math.min(height[j], height[i])*(i-j)
    //             }
    //         }
    //     }
        
    //     return max
        
        let i=0, j=height.length-1
       
        let max = 0
        while(i<j){
            let cur = Math.min(height[i],height[j])*(j-i)
            max = Math.max(max, cur)
            if(height[i]<height[j]){
                i++
            }else{
                j--
            }
        }
        return max
        
    };