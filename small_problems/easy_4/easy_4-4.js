let isPalindromicNumber = (num) =>
  num.toString() === num.toString().split("").reverse().join("") ? true : false;

console.log(isPalindromicNumber(34543)); // true
console.log(isPalindromicNumber(123210)); // false
console.log(isPalindromicNumber(22)); // true
console.log(isPalindromicNumber(5)); // true
