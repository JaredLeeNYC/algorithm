/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n===0){
        return 1
    }else if(n>0&&n%2===0){
        return myPow(x*x,n/2)
    }else if(n>0){
        return myPow(x,n-1)*x
    }else{
        return 1/myPow(x,Math.abs(n))
    }
     
 };