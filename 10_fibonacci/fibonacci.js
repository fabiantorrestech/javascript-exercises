const fibonacci = function(num) {
  num = +num;
  if(num < 0) return "OOPS";
  else if(num===0) return 0
  else if(num===1) return 1
  
  // will only ever execute for num >= 2
  let num1 = 0;
  let num2 = 1;
  let nextFib = 0;
  for(let i = 2; i <= num; i++){
    nextFib = num1 + num2; 
    num1 = num2;
    num2 = nextFib;
  }
  return nextFib;
}; 

// Do not edit below this line
module.exports = fibonacci;
