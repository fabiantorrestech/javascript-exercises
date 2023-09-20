const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let result = arr.reduce((total, item) => total + item , 0);
  return result;
};

const multiply = function(arr) {
  let result = arr.reduce((total, item) => total * item , 1);
  return result;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  result = 1;
  for(let i=a; i > 0; i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
