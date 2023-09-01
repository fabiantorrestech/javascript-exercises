const convertToCelsius = function(farTemp) {
  let result = Math.round(((farTemp-32)*(5/9)) * 1e1)/1e1;

  // if result is a clean number, return a clean number with no decimal.
  if(result%1 === 0){
    result = Math.round(result);
  }

  return result;
};

const convertToFahrenheit = function(celTemp) {
  let result = Math.round(((celTemp*(9/5))+32) * 1e1)/1e1;

  // if result is a clean number, return a clean number with no decimal.
  if(result%1 === 0){
    result = Math.round(result);
  }

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
