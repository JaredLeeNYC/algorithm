/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //i=0, j=1, s[i-j] = null, i++
    //i=1, j=1, s[i-j]='b', s[i+j]='b', length =3, max=3, cur=0, j++
    //i=1, j=2, s[i-j]=null,i++
    //i=2, j=1, s[i-j]='a', s[i+j]='a', length
    
    
    
    //define expand function to check all substring length base on each pointer
    function expand(s,l,r){
        let len = 1;
        if(l!==r && s[l]!==s[r]){
            return 1
        }
        while(s[l-1]&&s[r+1]&&s[l-1]===s[r+1]){
            l--;
            r++;
        }
        return r-l+1
    }
    
    //Traverse the string, use the expand function to check the possible extended substring length of each character, save the maximum length and the current pointer
    let max = 1;
    let cur;
    for(let i=0; i<s.length; i++){
       let le = Math.max(expand(s,i,i),expand(s,i,i+1));
        // console.log(i,le)
        if(le>max){
            max=le
            cur = i- Math.floor((le-1)/2)
             // console.log("max and cur", max,cur)
        }
        
    }
    
    return s.substr(cur, max)
};