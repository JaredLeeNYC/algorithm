var searchMatrix = function(matrix, target) {
    if(matrix === null || matrix.length === 0 || matrix[0]===null||matrix[0].length===0){
        return false
    }
    
    let x = 0
    let y = matrix[0].length-1
    let i = 0
    
    while(x<matrix.length&&y>=0){
        i++;
        console.log(matrix[x][y])
     
        if(matrix[x][y]===target){
            return true
        }else if(matrix[x][y]<target){
            x = x+1
        }else if(matrix[x][y]>target){
            y = y-1
        }
    }
    
    return false
    
    
    
//    let rowl = 0
//    let rowt = matrix.length-1
//    let coll = 0
//    let colt = matrix[0].length-1
 

 
//    while(rowl<rowt-1||coll<colt-1){

//        let x = Math.floor((rowl+rowt)/2)
//        let y = Math.floor((coll+colt)/2)

    
//        if(matrix[x][y]===target){
//            return true
//        }else if(matrix[x][y]>target){
//            rowt = x
//            colt = y
//        }else if(matrix[x][y]<target){
//            rowl = x
//            coll = y
//        }
//    }
//     if(rowt>=1&&colt>=1){
//        if(matrix[rowt-1][colt]===target||matrix[rowt][colt-1]===target)
//         return true
//     }else if(rowt>=1){
//           if(matrix[rowt-1][colt]===target)
//         return true
//     }  else if(colt>=1){
//           if(matrix[rowt][colt-1]===target)
//         return true
//     }  
//         if(matrix[rowt][colt]===target||matrix[rowl][coll]===target){
//             return true
//         }
    
   
//     return false
  
};