/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(matrix===null||matrix.length===0||matrix[0].length===0){
        return
    }
    const help = []
    for(let i=0; i<matrix.length; i++){
         let flag = false
        for(let j=0; j<matrix[0].length; j++){
           
            if(flag){
                if(matrix[i][j]===0){
                    help.push(j)
                }else{
                     matrix[i][j] = 0 
                }
              
            }else{
              if(matrix[i][j]===0){  
                  help.push(j)
                  j=-1;
                  flag = true;
               }
            }  
        }
    }
    for(let j=0; j<matrix[0].length;j++){
        if(help.includes(j)){
            for(let i=0; i<matrix.length; i++){
                matrix[i][j] = 0
            }
        }
    }
    return matrix
};