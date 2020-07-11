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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null){
        return []
    }
     const result = [];
     const helpArr = [];
     helpArr.push(root)
     while(helpArr.length){
         let temp = []
         let size = helpArr.length
         for(let i=0; i<size; i++){
             let node = helpArr.shift()
            
             if(node.left){
                 helpArr.push(node.left)
             }
              if(node.right){
                 helpArr.push(node.right)
             }
           temp.push(node.val)  
         }
         result.push(temp)
     }
     
     return result
     
 };