//Algorithm:
// Generate an odd number, greater than the given number, that is a multiple of 7 using a for loop
// Using a while loop and a helper function generate increment the number until no digits are repeated
//Helper function:
// Should turn number into string
// Assign an object a property for each number
// Increment each digit count by iterating through string

function hasRepeatedDigit(num) {
  let numString = num.toString();
  let counter = {};

  for (let index = 0; index < numString.length; index++) {
    if (!counter[numString[index]]) {
      counter[numString[index]] = 1;
    } else {
      counter[numString[index]] += 1;
    }
  }

  return Object.values(counter).some((count) => count > 1);
}

function featured(num) {
  let featuredNum = 0;

  if (num >= 9876543201)
    return "There is no possible number that fulfills those requirements.";

  while (num >= featuredNum || featuredNum % 2 === 0) {
    featuredNum += 7;
  }
  while (featuredNum % 2 === 0 || hasRepeatedDigit(featuredNum)) {
    featuredNum += 7;
  }

  return featuredNum;
}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543186));
console.log(featured(9876543200));
console.log(featured(9876543201));

// 21
// 21
// 35
// 1029
// 1043
// 1023547
// 1023456987
// 9876543201
// 9876543201
// "There is no possible number that fulfills those requirements."
