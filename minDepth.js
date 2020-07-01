/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null){
        return 0
    }
    if(root.left === null && root.right === null){
        return 1
    }else if(root.left === null){
        return 1+minDepth(root.right)
    }else if(root.right === null){
        return 1+minDepth(root.left)
    }else{
        let l = minDepth(root.left)
    let r = minDepth(root.right)
  
    return l<r?1+l:1+r 
    }
    
   
};