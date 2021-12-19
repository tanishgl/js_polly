Array.prototype.map = function(cb){
  let newArr = [];
  for(let i=0;i<this.length;i++){
    newArr.push(cb(this[i]));
  }
  return newArr;
}
