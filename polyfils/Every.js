Array.prototype.every = function (cb){
  for(let i=0;i<this.length;i++){
    if(cb(this[i])==false){
      return false;
    }
  }
}
