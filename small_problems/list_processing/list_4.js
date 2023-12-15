function leadingSubstrings(string) {
  let subStringArray = [];

  string.split("").forEach((element, index) => {
    subStringArray.push((subStringArray[index - 1] ?? "") + element);
  });

  console.log(subStringArray);
  return subStringArray;
}

leadingSubstrings("abc"); // ["a", "ab", "abc"]
leadingSubstrings("a"); // ["a"]
leadingSubstrings("xyzzy"); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
