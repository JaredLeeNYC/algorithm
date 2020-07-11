/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const answer = []
    let parenthesis = ''
    function generateParenthesisHelper(left, right, parenthesis, answer){
        if(left===0&&right===0){
            answer.push(parenthesis)
            return;
        }
        if(left>0){
            parenthesis += '('
            console.log("left", left, parenthesis)
            generateParenthesisHelper(left-1,right, parenthesis, answer)
           console.log("erase", left, parenthesis)
           parenthesis = parenthesis.substring(0,parenthesis.length-1)
              console.log("erased", left, parenthesis)
            
        }
        if(right>left){
            parenthesis +=')'
              console.log("right", right, parenthesis)
            generateParenthesisHelper(left, right-1, parenthesis, answer)
        }
        
    }
    
    generateParenthesisHelper(n, n, parenthesis, answer)
    return answer
  

};