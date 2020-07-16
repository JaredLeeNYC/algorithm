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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // let temp;
    // if(root===null){
    //     return null
    // }
    // temp = root.left
    // root.left = root.right
    // root.right = temp
    // invertTree(root.left)
    // invertTree(root.right)
    // return root
    if(root === null){
        return null
    }
    const queue = []
    queue.push(root)
    while(queue.length){
        let node = queue.shift();
        let temp = node.left
        node.left = node.right
        node.right = temp
        if(node.left){
            queue.push(node.left)
        }
         if(node.right){
            queue.push(node.right)
        }
    }
    return root
};