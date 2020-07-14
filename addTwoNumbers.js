/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode();
    let p = dummy;
    let carry = 0;
    while(l1||l2||carry){
        let sum = carry;
        if(l1){
            sum += l1.val
            l1 = l1.next
        }
        if(l2){
            sum += l2.val
            l2 = l2.next
        }
        p.next = new ListNode(sum%10)
        carry = Math.floor(sum/10)
        p = p.next 
    }
    
    return dummy.next
    
    
    
    
//       const l3 = new ListNode()
//     let temp = l3
//     temp.val = 0;
//     let exceed = false;
//        let exceed2 = false;
//     while(l1&&l2){
//         exceed =  l1.val+l2.val >9 ? true : false
//         temp.val = exceed ? temp.val+l1.val+l2.val-10 : temp.val+l1.val+l2.val
        
//         l1=l1.next
//         l2=l2.next
        
//         if((!l1||!l2)&&!exceed){
//             break
//         }
      
//         temp.next = new ListNode()
//         temp = temp.next
        
//         if(exceed){
//             temp.val = 1
//         }
//     }

//     if(l1){
        
//         if(exceed){
//            exceed2 = temp.val+l1.val>9? true : false
//            temp.val = temp.val+l1.val>9? temp.val+l1.val-10:temp.val+l1.val
//             while( exceed2){
//                  if(!l1.next){
//                     l1.next = new ListNode()
//                 }
//                l1.next.val = l1.next.val+1>9?l1.next.val+1-10:l1.next.val+1
//                    exceed2 = l1.next.val+1>9?true:false
//                  temp.next = l1.next
//                 l1=l1.next
//                 temp =temp.next
             
//                  }
              
              
//             temp.next = l1.next 
//         }else{
//            temp.next = l1
//         }
       
        
//     }
//     if(l2){
//         if(exceed){
//             exceed2 = temp.val+l2.val>9? true : false
//            temp.val = temp.val+l2.val>9? temp.val+l2.val-10:temp.val+l2.val
//             if( exceed2){
//                 if(!l2.next){
//                     l2.next = new ListNode()
//                 }
              
//                l2.next.val = l2.next.val+1
//                temp.next = l2.next
//                }
//             temp.next = l2.next
//         }else{
//            temp.next = l2
//         }
        
//     }
    
//     return l3
};