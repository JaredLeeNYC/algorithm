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
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    //   count++
    //   if(root === null){
    //       if(count===1){
    //           return []
    //       }else{
    //                 return null
    //       }
    
    //   }
    //     inorderTraversal(root.left)
    //           result.push(root.val)
    //     inorderTraversal(root.right)
    //    return result
        
    // Recursive
        // if(root===null){
        //     return []
        // }
        // let left = inorderTraversal(root.left)
        // let right = inorderTraversal(root.right)
        // left = left.concat(root.val)
        // left = left.concat(right)
        // return left
        
    //iterative
        const result = []
        const helpStack = []
      
        while(root||helpStack.length){
            while(root){
                 console.log(1,root)
               helpStack.push(root)
                root = root.left
               
            }
      console.log(2,root)
            root = helpStack.pop()
            result.push(root.val)
            root = root.right
                    console.log(3,root)
        }
        return result
        
    };