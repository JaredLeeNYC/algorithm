var isSymmetric = function(root) {
    
    //define a function that can check whether two nodes isMirror
    function isMirror(n1, n2){
        if(n1===null && n2 === null){
            return true
        }
        if((n1===null&& n2!==null)||(n2===null&& n1!==null) || (n1.val !== n2.val)){
            return false
        }
    
       return isMirror(n1.left, n2.right) && isMirror(n2.left, n1.right)
    }
    
    if(root !== null){
         return isMirror(root.left, root.right)
    }else{
        return true
    }
    
  
    
};