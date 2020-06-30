/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null){
        return null
    }
         let current = head;
         let last = null;
            let temp = head.next;
      
      while(current&&current.next){
         temp = current.next;
         current.next = last;
         last = current;
          current = temp
      }
      
      current.next = last;
     
      return current
      
  };