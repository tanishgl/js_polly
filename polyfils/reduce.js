Array.prototype.reduce = function(cb, initial_value){
  let ans;
  let start_index;

  if(initial_value==undefined){
    ans = cb(this[0], this[1], 1, this);
    start_index = 2;
  } else {
    ans = cb(initial_value, this[0], 0, this);
    start_index = 1;
  }
  
  for(let i=start_index;i<this.length;i++){
    ans = cb(ans, this[i], i, this);
  }
  return ans;
}

/* Example of a reducer or the callback function (cb) */

function sumation(prev, curr) {
  return prev+curr;
}

/* sumation is my reducer function. It accepts 2 arguments. prev -> previous value, curr -> current value REMEMBER :- Every reducer function can accept maximum 4 arguments.*/
/* reduce function accepts a callback function and optionally an initial value. callback function is reducer. If initial value is not passed
   then array[0] and array[1] becomes the previous and current value respectively. If passed, then initial value and array[0] becomes prev 
   and curr respectively.*/
