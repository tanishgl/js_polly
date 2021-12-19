Array.prototype.concat = function(arr2){
  let arr = [];
  for(let i=0;i<this.length;i++){
    arr.push(this[i]);
  }
  for(let i=0;i<arr2.length;i++){
    arr.push(arr2[i]);
  }
  return arr;
}

/* concat is a higher order function that concatenates 2 arrays. In above, arr2 is passed as an argument to concat function and "this" represents the first array. */
