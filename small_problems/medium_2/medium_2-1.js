function letterPercentages(string) {
  let uppercaseArray = string.match(/[A-Z]/g);
  let upCount = Array.isArray(uppercaseArray) ? uppercaseArray.length : 0;
  let lowercaseArray = string.match(/[a-z]/g);
  let lowCount = Array.isArray(lowercaseArray) ? lowercaseArray.length : 0;
  let otherArray = string.match(/[^a-z]/gi);
  let otherCount = Array.isArray(otherArray) ? otherArray.length : 0;
  let total = string.length;

  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  obj.lowercase = ((lowCount / total) * 100).toFixed(2);
  obj.uppercase = ((upCount / total) * 100).toFixed(2);
  obj.neither = ((otherCount / total) * 100).toFixed(2);

  console.log(obj);
  return obj;
}

letterPercentages("abCdef 123");
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages("AbCd +Ef");
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages("123");
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
