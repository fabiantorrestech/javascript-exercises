const sumAll = function(start, end) {

  // if non-number parameter is encountered.
  if(start<0 || end<0 ||
    typeof start !== "number" ||
    typeof end !== "number"){
   return "ERROR";
  }

  let sum = 0;
  // if smaller number is specified first.
  if(start <= end){
    for(let i=start; i<=end; i++){
      sum += i;
    }
  }

  // if bigger number is specified first.
  else{
    for(let i=start; i>=end; i--){
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
