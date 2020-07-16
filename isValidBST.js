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
var isValidBST = function(root) {
    function checkBoundary(root, floor, ceil){
        // console.log(root, floor, ceil)
        if(root === null){
            return true
        }
        if(floor!==null && floor.val >= root.val){
            return false
        }
         if(ceil!==null && ceil.val <= root.val){
            return false
        }
        
        return checkBoundary(root.left, floor, root)&&checkBoundary(root.right, root, ceil)
    }
     
     return checkBoundary(root, null, null)
     
 };