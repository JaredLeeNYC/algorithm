/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
   
    if(s===null||s.length===0){
        return 0
    }
    let count=1;
    let sub=s[0];
    let max=1;
    for(let i=1; i<s.length; i++){
     
        if(sub.indexOf(s[i])===-1){
            count++;
            sub = sub+s[i]
            if(count > max){
                max = count;
            }
        }else{
     
         sub =  sub.substr(sub.indexOf(s[i])+1)
        
          sub = sub + s[i]
          count = sub.length
           
        
        }
    }
    return max
};