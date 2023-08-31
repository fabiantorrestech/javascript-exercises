const reverseString = function(inputStr) {
  // there is no easy method to reverse a string in JS...

  // method 1 -- use a decrementing for loop and a new result string.
  let result = "";
  for(let i=inputStr.length-1; i >= 0; i--){
    result += inputStr[i];
  }
  return result;

  // method 2 -- use split(), reverse(), join("").
  // - split("") will convert the string to an array
  // - reverse() will reverse the array
  // - join("") will join the array into a string, without the commas.
  // return inputStr.split("").reverse().join("");

};

// Do not edit below this line
module.exports = reverseString;
