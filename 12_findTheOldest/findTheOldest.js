const findTheOldest = function(people) {

  // sort from oldest to youngest
  let oldestToYoungest = people.sort((a, b) => {
    let mostRecentYearA = a.yearOfDeath ? a.yearOfDeath : (new Date().getFullYear());
    let mostRecentYearB = b.yearOfDeath ? b.yearOfDeath : (new Date().getFullYear());

    let ageA = mostRecentYearA - a.yearOfBirth;
    let ageB = mostRecentYearB - b.yearOfBirth;
    return ageA > ageB ? -1 : 1;
  });

  // return the 1st entry.
  return oldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
