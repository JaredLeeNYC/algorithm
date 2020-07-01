var isPalindrome = function(x) {
    //x=9999, length=1, left=[9], right=[9] ,x=999.9
    // length =2, left=[9,]  
    
    //if x is negative, return false
    if(x<0){
        return false
    }else if(x===0){
        return true
    }
        
    let length=0
    let left=x;
   let right=0;
    while(x>=1){
        length++;
       right = right*10+(x%10)
        x=parseInt(x/10);
        
    }
   
   if(right === left){
       return true
   }else{
       return false
   }
    
    
    
};