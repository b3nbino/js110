//Algorithm:
// Separate string into three strings each within their category
// Use regex to create strings of each kind
// If there are non of a category match will return null so if null reassign variable to array
// Divide each category length by original string length then multiply by 100 and use tofixed for decimals
// Assign percentages to object

function letterPercentages(string) {
  let lowCase = string.match(/[a-z]/g);
  let upCase = string.match(/[A-Z]/g);
  let misc = string.match(/[^A-z]/g);
  let lowercase;
  let uppercase;
  let neither;
  let obj = {};

  if (!Array.isArray(lowCase)) {
    lowCase = [];
  }
  if (!Array.isArray(upCase)) {
    upCase = [];
  }
  if (!Array.isArray(misc)) {
    misc = [];
  }

  obj.lowercase = ((lowCase.length / string.length) * 100).toFixed(2);
  obj.uppercase = ((upCase.length / string.length) * 100).toFixed(2);
  obj.neither = ((misc.length / string.length) * 100).toFixed(2);

  console.log(obj);
  return obj;
}

letterPercentages("abCdef 123");
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages("AbCd +Ef");
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages("123");
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
