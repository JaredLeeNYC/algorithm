/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix===null || matrix.length===0 ||matrix[0].length===0){
        return false
    }
   
    let l=0, r=matrix.length*matrix[0].length-1
    while(l<=r){
      let  mid = l+Math.floor((r-l)/2)
      let m = Math.floor(mid/matrix[0].length), n = mid%matrix[0].length
      if(target===matrix[m][n]){
          return true
      }else if(target<matrix[m][n]){
          r = mid - 1
      }else{
          l = mid + 1
      }
    }
    return false
};