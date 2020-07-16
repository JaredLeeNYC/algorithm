/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<2){
        return 0
    }
    let maxProfit = 0, buy = prices[0]
    for(let i=1; i<prices.length; ++i){
        if(prices[i]<buy){
            buy = prices[i]
        }else{
            maxProfit = Math.max(maxProfit, prices[i]-buy)
        }
    }
    return maxProfit
//     if(prices.length<2){
//         return 0
//     }
//     let buy, sell, newBuy=null
//     if(prices[1]-prices[0]>0){
//         buy = 0;
//         sell = 1;
//     }else{
//         buy = 1;
//         sell = null;
//     }
//     for(let i=2; i<prices.length; i++){
//        if(sell === null){
//            if(prices[i]-prices[buy]>0){
//                sell = i
//            }else{
//                buy = i
//            }
//        }else{
//            if(newBuy){
//                if(prices[i]-prices[newBuy]>prices[sell]-prices[buy]){
//                    buy = newBuy;
//                    sell = i;
//                    newBuy = null;
//                }else if(prices[i]-prices[newBuy]<0){
//                    newBuy = i;
//                }
//            }else{
//                if(prices[i]-prices[buy]>prices[sell]-prices[buy]){
//                sell = i
//            }else if(prices[i]-prices[buy]<0){
//                newBuy = i
           
//            }
//            }
//        }
//     }
    
//     return sell?prices[sell]-prices[buy]:0
};