Array.prototype.findIndex = function (cb){
  for(let i=0;i<this.length;i++){
    if(cb(this[i])){
      return i;
    }
  }
  return -1;
}
