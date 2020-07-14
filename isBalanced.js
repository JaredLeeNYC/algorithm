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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root===null){
        return true
    }
    function maxDepth(node){
        if(node===null){
            return 0
        }
        return Math.max(maxDepth(node.left), maxDepth(node.right))+1
    }
    
    if(Math.abs(maxDepth(root.left)-maxDepth(root.right))<=1){
      return isBalanced(root.left) && isBalanced(root.right)
    }else{
        return false
    }
};