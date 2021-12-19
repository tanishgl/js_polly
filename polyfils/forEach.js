Array.prototype.forEach = function(cb){
  for(let i=0;i<this.length;i++){
    console.log(cb(this[i]));
  }
}
