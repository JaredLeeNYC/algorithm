/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0, mask=1
    while(mask!==0){
        
        if((n&mask)!==0){
            count++
        }
        mask <<= 1
    }
    return count
};