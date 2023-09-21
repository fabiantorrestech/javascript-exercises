const convertToCelsius = function(farTemp) {
  return Math.round(((farTemp-32)*(5/9)) * 10)/10;
};

const convertToFahrenheit = function(celTemp) {
  return Math.round(((celTemp*(9/5))+32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
