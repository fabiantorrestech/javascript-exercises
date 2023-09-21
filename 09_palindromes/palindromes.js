
// utilizes regEx to test if a character is a letter in js
function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char);
}

// utilizes regEx to test if a character is a number in js
function isCharacterANumber(char) {
  return /^[0-9]*$/.test(char);
}

const palindromes = function (str) {

  // cleanup the original string
  // - puncutation
  // - convert to all lowercase
  // - account for numbers too
  let fixedStr = str.toLowerCase()
  .split("")
  .reduce((newStr, char) => {
    let append = "";
    if(isCharacterALetter(char) || isCharacterANumber(char))
      append = char;

    return newStr + append;
  }, "");

  // reverse the string to see if it matches
  let reversedStr = fixedStr.split("")
  .reduce((newStr, char) => char + newStr, "");

  if(fixedStr === reversedStr)
    return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
