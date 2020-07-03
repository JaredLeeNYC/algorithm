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
var maxDepth = function(root) {
    //if root === null, return null
    if(root===null){
        return null
    }
   
    //check whethe the node is the end of the tree
    if(root.left===null&&root.right===null){
        return 1
    }else if(root.left===null){
        return 1+maxDepth(root.right)
    }else if(root.right===null){
        return 1+maxDepth(root.left)
    }else{
        return 1+Math.max(maxDepth(root.right),maxDepth(root.left))
    }
};