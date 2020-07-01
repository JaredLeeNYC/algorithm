/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    //define variable count to count, initial it as s.length as single letter is all counted
    let count = s.length;
    
    //define a function to check the subString whether is palindrome
    function checkPalindrome(str){
        for(let i=0, j=str.length-1; i<j; i++,j--){
            if(str[i]!==str[j]){
               return false
               }
        }
        return true;
    }
    
    //iterate all the subString from length as 2
    for(let l=2; l<=s.length; l++){
       for(let i=0;i+l<=s.length; i++){
        if(checkPalindrome(s.substr(i,l))){
            count++
        }
    } 
    }
    
    
    return count;
};