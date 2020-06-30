var getSum = function(a, b) {
    //a^b + a&b<<1
     
    return b===0?a:getSum(a^b, (a&b)<<1)
};