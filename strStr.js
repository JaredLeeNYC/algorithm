/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length===0){
        return 0
    }
    for(let i=0; i<=haystack.length-needle.length; i++){
        if(haystack[i]===needle[0]){
            let k=i;
            for(let j=0; j<needle.length; j++){
                if(needle[j]!==haystack[k]){
                    break
                }
                if(j===needle.length-1){
                    return i
                }
                k++;
            }
        }
    }
    return -1
};