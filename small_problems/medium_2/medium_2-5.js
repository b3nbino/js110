// function featured(num) {
//   let featureNum = 7;
//   let repeatedNum = true;
//   let validNum = false;
//   let featureString;

//   if (num >= 9876543201) return console.log("Maximum featured number exceeded");

//   //Calculates an initial value greater than the provided num and odd
//   function valid() {
//     while (featureNum <= num || featureNum % 2 === 0) {
//       featureNum += 7;
//     }
//     featureString = featureNum.toString();
//   }

//   function repeated() {
//     //Determines if featuredNum has a repeated digit
//     for (let i = 0; i < featureString.length; i++) {
//       if (featureString.match(new RegExp(featureString[i]) ?? []).length > 1) {
//         featureNum += 7;
//         return;
//       }
//     }
//   }

//   valid();
//   repeated();
//   valid();

//   console.log(featureNum);
//   return featureNum;
// }

// featured(12); // 21
// featured(20); // 21
// featured(21); // 35
// featured(997); // 1029
// featured(1029); // 1043
// featured(999999); // 1023547
// featured(999999987); // 1023456987
// featured(9876543186); // 9876543201
// featured(9876543200); // 9876543201
// featured(9876543201); // "There is no possible number that fulfills those requirements."
