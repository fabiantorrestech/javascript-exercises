
const removeFromArray = function(inputArr, ...args) {

  // method 1 -- naive solution i created
  // - first loop through all extra arguments
  // - compare each argument to each element in the array, 1 at a time (essentially a double for-loop)

  // let resultArray = inputArr;
  // for(let i=0; i<args.length; i++){
  //   resultArray = resultArray.filter((num) => {
  //     return num !== args[i];
  //   });
  // }
  // return resultArray;

  // method 2 -- a cleaner approach to my 1st solution.
  // - tells the function to look through each element of inputArr with filter()
  // - in the filter function, we say to only inlcude inputArr elements NOT FOUND in the extra arguments.

  return inputArr.filter((element) => {
    return !args.includes(element);
  });

};

// Do not edit below this line
module.exports = removeFromArray;
