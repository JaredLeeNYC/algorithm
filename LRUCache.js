/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.arr = []
    this.hash = {}
    this.len = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
   
     if(this.hash[key]){
   
         this.arr.splice(this.arr.indexOf(key),1)
         
         this.arr.push(key)
         return this.hash[key]
     }else{
         return -1
     }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
   
    // console.log(Object.keys(this.hash).length, "   ", this.arr.length)
     if(Object.keys(this.hash).length<this.len){
          if(!this.hash[key]){
             this.arr.push(key)
         }
        this.hash[key]=value
      
         
    }else{
         if(Object.keys(this.hash).includes(key+'')){

                this.arr.splice(this.arr.indexOf(key),1)
                this.arr.push(key)
                this.hash[key] = value
          }else{
           delete this.hash[this.arr[0]]
           this.arr.splice(0,1)
           this.arr.push(key)
          this.hash[key]=value
          }
     
    
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */