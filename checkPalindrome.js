function checkPalindrome(str){
    //filt the invalid letters
    const validStr = str.replace(/([^a-zA-Z0-9])/g,'').toLowerCase()
    
    //set double pointers i and j, check letter from begin and end seprately, if str[i] equals str[j], then move on, until i >= j , return true; otherwise return false
     for(let i=0,j=validStr.length-1;i<j;i++,j--){
       if(validStr[i]!==validStr[j]) return false
     }
    return true
    
  }
  
  let str1 = '1sd fG-eGfds1'
  let str2 = '1234321'
  let str3 = 'abcd+_ &(*)dcba'
  let str4 = '136**3(1)1'
  
  
  console.log(checkPalindrome(str4))
  